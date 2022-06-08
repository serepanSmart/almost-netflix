import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import movies, { IMovie } from '@/service/movies';
import { filters } from '@/containers/Controls';
import { ITab, Option } from '@/UI';
import { OnChangeValue } from 'react-select';
import { sortByField } from '@/utils';
import { ChildrenProps } from '@/types';

const defaultOptions: Option[] = [
  { value: 'year', label: 'Release Date' },
  { value: 'genre', label: 'Genre' },
];

interface IContextProps {
  moviesList: IMovie[];
  movie: IMovie;
  setMovie: (data: IMovie) => void;
  handleShowMovie: (data: React.SetStateAction<IMovie>) => void;
  handleSelectGenre: (e: ITab) => void;
  filtersState: ITab[];
  selectedOption: Option | Option[];
  handleChangeOption: (value: OnChangeValue<Option, false>) => void;
  defaultOptions: Option[];
  isOpenedCard: boolean;
  setOpenedCard: (e: React.SetStateAction<boolean>) => void;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> =
  ({ children }) => {

    // STATES FOR GET MOVIES, SORT AND FILTER
    const [moviesList, setMoviesList] = useState<IMovie[]>(movies);
    const [filtersState, setFiltersState] = useState<ITab[]>(filters);
    const [movie, setMovie] = useState<IMovie>(null);
    const [isOpenedCard, setOpenedCard] = useState(false);
    const [selectedOption, setSelectedOption] = useState(() => {
      const option = defaultOptions[0];
      if (!option) {
        throw new Error('empty options list');
      }
      return option;
    });

    // SORT HANDLER FOR SELECT
    const handleChangeOption = useCallback((
      newValue: Option
    ) => {
      setSelectedOption(newValue as Option);
      setMoviesList(prev => {
        prev.sort(sortByField(newValue.value));
        return [...prev];
      });
    }, []);

    // GENRE FILTER
    const renderMoviesByGenre = useCallback((e: ITab) => {
      const selectedMovies = movies.filter(movie => {
        return movie.genre === e.value;
      });
      if (e.value === 'All') {
        return movies;
      }
      return selectedMovies;
    }, []);

    const handleSelectGenre = useCallback((e: ITab) => {
      setFiltersState(state => {
        state.find(tab => tab.active).active = false;
        state.find(tab =>
          tab.value === e.value).active = true;
        return [...state];
      });
      setMoviesList(renderMoviesByGenre(e));
    }, [renderMoviesByGenre]);

    // ON CLICK CARD
    const handleShowMovie = useCallback(
      (data: IMovie) => {
        setMovie(prev => {
          if(prev?.id === data?.id) {
            setOpenedCard(false);
            return null;
          }
          setOpenedCard(true);
          return data;
        });
      }, []);

    const value = useMemo<IContextProps>(() => ({
      moviesList,
      handleShowMovie,
      handleSelectGenre,
      filtersState,
      setFiltersState,
      selectedOption,
      handleChangeOption,
      defaultOptions,
      movie,
      setMovie,
      isOpenedCard,
      setOpenedCard,
    }),
    [
      moviesList,
      handleShowMovie,
      handleSelectGenre,
      filtersState,
      selectedOption,
      handleChangeOption,
      movie,
      setMovie,
      isOpenedCard,
      setOpenedCard,
    ]);

    return (
      <MoviesContext.Provider value={value}>
        {children}
      </MoviesContext.Provider>
    );
  };

const useMoviesContext = (): IContextProps => {
  const value = useContext(MoviesContext);
  if (!value) {
    throw new Error('USING VALUE OUTSIDE OF MOVIES CONTEXT PROVIDER');
  }
  return value;
};

export { useMoviesContext, MoviesContextProvider };