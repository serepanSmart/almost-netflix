import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { ChildrenProps } from '@/types';
import { IMovie } from '@/service';

interface IContextProps {
  movie: IMovie;
  setMovie: (data: IMovie) => void;
  isOpenedCard: boolean;
  setOpenedCard: (e: React.SetStateAction<boolean>) => void;
  handleShowMovie: (data: IMovie) => void;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  // ON CLICK CARD TO SHOW INFO IN THE BANNER
  const [movie, setMovie] = useState<IMovie>(null);
  const [isOpenedCard, setOpenedCard] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');

  // ON CLICK CARD
  const handleShowMovie = useCallback((data: IMovie) => {
    setMovie((prev) => {
      if (prev?.id === data?.id) {
        setOpenedCard(false);
        return null;
      }
      setOpenedCard(true);
      return data;
    });
  }, []);

  const value = React.useMemo<IContextProps>(
    () => ({
      movie,
      setMovie,
      isOpenedCard,
      setOpenedCard,
      handleShowMovie,
      query,
      setQuery,
      sortValue,
      setSortValue,
      filterValue,
      setFilterValue,
    }),
    [movie, isOpenedCard, handleShowMovie, query, sortValue, filterValue],
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
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
