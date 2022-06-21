import { useMoviesContext } from '@/context';
import { IMovie } from '@/service';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';
import { fetchMovies } from '@/redux/actions';
import { OnChangeValue } from 'react-select';
import filters from '@/containers/Controls/filtersList';
import { ITab, Option } from '@/UI';

export const defaultOptions: Option[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'vote_average', label: 'Rating' },
];

const showLimit = 'limit=15';
const defaultOrder = 'sortOrder=desc';
const defaultOption = defaultOptions[0].value;

export const DATE_SORTING =
  `?sortBy=${defaultOption}&sortOrder=asc&${showLimit}`;

export const urlConstructor = (
  select = defaultOption,
  genre = '',
  order = defaultOrder,
  limit = showLimit
): string => {
  return genre.length
    ? `?sortBy=${select}&${order}&filter=${genre}&${limit}`
    : `?sortBy=${select}&${order}&${limit}`;
};

interface IHandleMovies {
  filtersList: ITab[];
  selectedOption: Option | Option[];
  loading: boolean;
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
  handleSelectGenre: (e: ITab) => void;
  moviesList: IMovie[];
}

export const useHandleMovie = (): IHandleMovies => {
  const [filtersList, setFilterslist] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const {
    setQuery,
    sortValue,
    setSortValue,
    filterValue,
    setFilterValue
  } = useMoviesContext();

  const dispatch = useDispatch();

  const moviesList = useSelector((state: RootState) => {
    return state.movies.moviesList?.data;
  });

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const getMoviesByDefault = useCallback(() => {
    dispatch(fetchMovies(urlConstructor()));
    setSortValue(defaultOption);
    setQuery(urlConstructor());
  }, [dispatch, setQuery, setSortValue]);

  // FUNCTION TO CHANGE ACTIVE TAB STATE
  const selectActiveTabHandler = (value: string): void =>
    setFilterslist((prev) => {
      prev.find((tab) => tab.active).active = false;
      prev.find((tab) => tab.value === value).active = true;
      return [...prev];
    });

  // SORT HANDLER FOR SELECT
  const handleChangeOption = useCallback(
    (newValue: OnChangeValue<Option, false>) => {
      setSelectedOption(newValue as Option);
      const sortParameter = newValue.value;
      dispatch(fetchMovies(urlConstructor(sortParameter, filterValue)));
      setQuery(urlConstructor(sortParameter, filterValue));
      setSortValue(sortParameter);
    },
    [dispatch, filterValue, setQuery, setSortValue],
  );

  // GENRE FILTER TABS
  const handleSelectGenre = useCallback(
    (e: ITab) => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        dispatch(fetchMovies(urlConstructor(sortValue)));
        setFilterValue('');
      } else {
        selectActiveTabHandler(e.value);
        dispatch(fetchMovies(urlConstructor(sortValue, e.value)));
        setQuery(urlConstructor(sortValue, e.value));
        setFilterValue(e.value);
      }
    },
    [dispatch, setFilterValue, setQuery, sortValue],
  );

  // GET MOVIES BY DEFAULT
  useEffect(() => {
    getMoviesByDefault();
  }, [getMoviesByDefault]);

  return {
    filtersList,
    selectedOption,
    loading,
    handleChangeOption,
    handleSelectGenre,
    moviesList,
  };
};