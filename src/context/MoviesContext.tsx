import React, {
  useState,
  useMemo,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChildrenProps } from '@/types';
import { urlConstructor, defaultOption } from './utils';

interface IContextProps {
  handleInputChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  resetCardInfo: () => void;
  searchInputValue: string;
  search: string;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  movieId: string;
  setMovieId: Dispatch<SetStateAction<string>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  setYOffset: Dispatch<SetStateAction<number>>;
}

const MoviesContext = createContext<IContextProps | null>(null);

const useQuery = (): URLSearchParams => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const MoviesContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  // ROUTER HOOKS
  const filter = useQuery().get('filter');
  const movie = useQuery().get('movie');
  const { search } = useLocation();
  const navigate = useNavigate();

  // STATES FOR GET MOVIES, SORT AND FILTER
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [query, setQuery] = useState<string>(search || urlConstructor());
  const [movieId, setMovieId] = useState<string>(movie || '');
  const [sortValue, setSortValue] = useState<string>(defaultOption);
  const [filterValue, setFilterValue] = useState<string>(filter);
  const [yOffset, setYOffset] = useState<number>(null);

  const handleInputChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>): void => {
      setSearchInputValue(e.currentTarget.value);
    },
    [],
  );

  // ON CLICK CARD TO SHOW INFO IN THE BANNER
  const resetCardInfo = useCallback(() => {
    setMovieId('');
    const setParams = urlConstructor(sortValue, filterValue, '');
    setQuery(setParams);
    navigate(setParams);
    window.scrollTo(0, yOffset);
  }, [filterValue, navigate, sortValue, yOffset]);

  const value = useMemo<IContextProps>(
    () => ({
      resetCardInfo,
      searchInputValue,
      handleInputChange,
      query,
      setQuery,
      sortValue,
      setSortValue,
      filterValue,
      setFilterValue,
      setSearchInputValue,
      yOffset,
      setYOffset,
      search,
      movieId,
      setMovieId,
    }),
    [
      resetCardInfo,
      searchInputValue,
      handleInputChange,
      query,
      sortValue,
      filterValue,
      yOffset,
      search,
      movieId,
    ],
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

const useMoviesContext = (): IContextProps => {
  const value = useContext(MoviesContext);
  if (!value) {
    throw new Error(
      'USING MOVIES CONTEXT VALUES OUTSIDE OF MOVIES CONTEXT PROVIDER',
    );
  }
  return value;
};

export { useMoviesContext, MoviesContextProvider };
