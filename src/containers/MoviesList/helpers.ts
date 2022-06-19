import { IMovie } from '@/service';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITab, Option } from '@/UI';
import { RootState } from '@/redux/rootReducer';
import { fetchMovies } from '@/redux/actions';
import { OnChangeValue } from 'react-select';
import filters from '@/containers/Controls/filtersList';
import { IAlert } from '@/UI/Alert';

export const defaultOptions: Option[] = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'genre', label: 'Genre' },
];

const showLimit = 'limit=15';
const defaultOrder = 'sortOrder=asc';
const defaultOption = defaultOptions[0]?.value;

export const DATE_SORTING =
`?sortBy=${defaultOption}&sortOrder=asc&${showLimit}`;

const urlConstructor =
(select = defaultOption, genre = ''): string => {
  return genre.length
    ? `?sortBy=${select}&${defaultOrder}&filter=${genre}&${showLimit}`
    : `?sortBy=${select}&${defaultOrder}&${showLimit}`;
};

interface IHandleMovies {
  filtersList: ITab[];
  selectedOption: Option | Option[];
  loading: boolean;
  alert: IAlert;
  handleChangeOption: (newValue: OnChangeValue<Option, false>) => void;
  handleSelectGenre: (e: ITab) => void;
  moviesList: IMovie[];
}

export const useHandleMovie = (): IHandleMovies => {
  const [filtersList, setFilterslist] = useState<ITab[]>(filters);
  const [selectedOption, setSelectedOption] = useState(defaultOptions[0]);

  const dispatch = useDispatch();

  const moviesList = useSelector((state: RootState) => {
    return state.movies.moviesList?.data;
  });

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const alert = useSelector((state: RootState) => {
    return state.app.alert;
  });

  const getMoviesByDefault = useCallback(() => {
    dispatch(fetchMovies(urlConstructor()));
  }, [dispatch]);

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
      dispatch(fetchMovies(urlConstructor(sortParameter)));
      selectActiveTabHandler('All');
    },
    [dispatch],
  );

  // GENRE FILTER TABS
  const handleSelectGenre = useCallback(
    (e: ITab) => {
      if (e.value === 'All') {
        selectActiveTabHandler('All');
        getMoviesByDefault();
      } else {
        selectActiveTabHandler(e.value);
        dispatch(fetchMovies(urlConstructor(defaultOption, e.value)));
      }
      setSelectedOption(defaultOptions[0]);
    },
    [dispatch, getMoviesByDefault],
  );

  // GET MOVIES BY DEFAULT
  useEffect(() => {
    getMoviesByDefault();
  }, [getMoviesByDefault]);

  return {
    filtersList,
    selectedOption,
    loading,
    alert,
    handleChangeOption,
    handleSelectGenre,
    moviesList,
  };
};