import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    query,
    search,
    setQuery,
    sortValue,
    setSortValue,
    filterValue,
    setFilterValue,
    setSearchInputValue,
  } = useMoviesContext();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const setUrlParams =
    (sortParameter = defaultOption, filterValue = ''): void => {
      dispatch(fetchMovies(urlConstructor(sortParameter, filterValue)));
      setQuery(urlConstructor(sortParameter, filterValue));
      setSortValue(sortParameter);
      setFilterValue(filterValue);
      navigate(urlConstructor(sortParameter, filterValue), { replace: true });
      // eslint-disable-next-line max-len
      setSearchInputValue(`Sorted by: ${sortParameter.replace('_', ' ').toUpperCase()}; ${filterValue ? `Genre: ${filterValue.toUpperCase()}` : ''}`);
    };

  // FUNCTION TO CHANGE ACTIVE TAB STATE
  const selectActiveTabHandler = (value: string): void =>
    setFilterslist((prevState: ITab[]) => {
      try {
        prevState.find((tab) => tab.active).active = false;
        prevState.find((tab) => tab.value === value).active = true;
      } catch {
        prevState.find((tab) => tab.value === 'All').active = true;
        navigate(query);
        dispatch(fetchMovies(query));
      }
      return [...prevState];
    });

  // SORT HANDLER FOR SELECT
  const handleChangeOption =
    (newValue: OnChangeValue<Option, false>): void => {
      setSelectedOption(newValue as Option);
      const sortParameter = newValue.value;
      setUrlParams(sortParameter, filterValue);
    };

  // GENRE FILTER TABS
  const handleSelectGenre =
    (e: ITab): void => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        setUrlParams(sortValue, '');
      } else {
        selectActiveTabHandler(e.value);
        setUrlParams(sortValue, e.value);
      }
    };

  // GET MOVIES BY DEFAULT, INIT LOAD
  useEffect(() => {
    dispatch(fetchMovies(search || query));
    if (filterValue) {
      selectActiveTabHandler(filterValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre,
  };
};