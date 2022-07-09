import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { rootPath } from '@/constants';

interface IHandleMovies {
  filtersList: ITab[];
  selectedOption: Option | Option[];
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
  handleSelectGenre: (e: ITab) => void;
  handleShowMovie: (card: number) => void;
}

export const useHandleMovie = (): IHandleMovies => {
  const [filtersList, setFilterslist] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const {
    query,
    setQuery,
    sortValue,
    setSortValue,
    filterValue,
    setFilterValue,
    movieId,
    setMovieId,
    setYOffset,
    setSearchInputValue,
  } = useMoviesContext();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const searchQuery = pathname.split(`${rootPath}/`)[1];

  const setUrlParams =
    (
      sortParameter = defaultOption,
      filterValue = '',
      id = movieId,
      search = ''
    ): void => {
      dispatch(
        fetchMovies(urlConstructor(sortParameter, filterValue, id, search)));
      setQuery(urlConstructor(sortParameter, filterValue, id, search));
      setSortValue(sortParameter);
      setFilterValue(filterValue);
      setMovieId(id);
      navigate(
        urlConstructor(sortParameter, filterValue, id, search),
        { replace: true }
      );
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
      setUrlParams(sortParameter, filterValue, undefined, searchQuery);
    };

  // GENRE FILTER TABS
  const handleSelectGenre =
    (e: ITab): void => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        setUrlParams(sortValue, '', undefined, searchQuery);
      } else {
        selectActiveTabHandler(e.value);
        setUrlParams(sortValue, e.value, undefined, searchQuery);
      }
    };

  const handleShowMovie = (id: number): void => {
    setMovieId(id?.toString());
    const setParams = urlConstructor(sortValue, filterValue, id.toString());
    setQuery(setParams);
    navigate(setParams);
    setYOffset(window.scrollY);
    window.scrollTo(0, 0);
  };

  // GET MOVIES BY DEFAULT, INIT LOAD
  useEffect(() => {
    if (pathname.length > `${rootPath}/`.length) {
      setUrlParams(sortValue, filterValue, undefined, searchQuery);
      setSearchInputValue(searchQuery);
    } else {
      dispatch(fetchMovies(query));
    }
    if (filterValue) {
      selectActiveTabHandler(filterValue);
    }
  }, []);

  return {
    filtersList,
    selectedOption,
    handleChangeOption,
    handleSelectGenre,
    handleShowMovie,
  };
};