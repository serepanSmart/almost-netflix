import { useState, useEffect } from 'react';
import { OnChangeValue } from 'react-select';
import { useMoviesContext } from '@/context';
import {
  urlConstructor,
  defaultOptions,
  defaultOption,
} from '@/context/utils';
import filters from '@/containers/Controls/filtersList';
import { ITab, Option } from '@/UI';
import { useDispatch } from '@/redux/store';
import { fetchMovies } from '@/redux/actions';
import { useRouter } from 'next/router';

interface IHandleMovies {
  filtersList: ITab[];
  selectedOption: Option | Option[];
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
  handleSelectGenre: (e: ITab) => void;
}

export const useHandleMovie = (): IHandleMovies => {
  const [filtersList, setFilterslist] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const {
    queryParameters,
    setQueryParameters,
    sortValue,
    setSortValue,
    filterValue,
    setFilterValue,
    movieId,
    setMovieId,
    searchInputValue,
  } = useMoviesContext();

  const router = useRouter();

  const dispatch = useDispatch();

  const setUrlParams =
    (
      sortParameter = defaultOption,
      filter = filterValue,
      id = movieId,
      search = searchInputValue
    ): void => {
      setQueryParameters(urlConstructor(sortParameter, filter, id, search));
      setSortValue(sortParameter);
      setFilterValue(filter);
      setMovieId(id);
      router.push(`${searchInputValue}${urlConstructor(sortParameter, filter, id, search)}`);
    };

  // FUNCTION TO CHANGE ACTIVE TAB STATE
  const selectActiveTabHandler = (value: string | string[]): void =>
    setFilterslist((prevState: ITab[]) => {
      try {
        prevState.find((tab) => tab.active).active = false;
        prevState.find((tab) => tab.value === value).active = true;
      } catch {
        prevState.find((tab) => tab.value === 'All').active = true;
        dispatch(fetchMovies(queryParameters));
      }
      return [...prevState];
    });

  // SORT HANDLER FOR SELECT
  const handleChangeOption =
    (newValue: OnChangeValue<Option, false>): void => {
      setSelectedOption(newValue as Option);
      const sortParameter = newValue.value;
      setUrlParams(sortParameter, filterValue, undefined);
    };

  // GENRE FILTER TABS
  const handleSelectGenre =
    (e: ITab): void => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        setUrlParams(sortValue, '', undefined);
      } else {
        selectActiveTabHandler(e.value);
        setUrlParams(sortValue, e.value, undefined);
      }
    };

  useEffect(() => {
    if (filterValue) {
      selectActiveTabHandler(filterValue);
    }
  }, []);

  return {
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre,
  };
};