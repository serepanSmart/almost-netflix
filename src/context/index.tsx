import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  useMemo
} from 'react';
import { IMovie } from '@/service/movies';
import { ChildrenProps } from '@/types';

interface IContextProps {
  movie: IMovie;
  handleShowMovie: (data: React.SetStateAction<IMovie>) => void;
  resetCardInfo: () => void;
  isOpenedCard: boolean;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> =
({ children }) => {
  const [movie, setOpenedMovie] = useState<IMovie>(null);
  const [isOpenedCard, setOpenedCard] = useState(false);

  // ON CLICK CARD
  const resetCardInfo = useCallback(() => {
    setOpenedCard(!isOpenedCard);
  }, [isOpenedCard]);

  const handleShowMovie = useCallback(
    (data: React.SetStateAction<IMovie>) => {
      resetCardInfo();
      setOpenedMovie(data);
    },
    [resetCardInfo],
  );

  const value = useMemo<IContextProps>(
    () => ({
      movie,
      handleShowMovie,
      isOpenedCard,
      resetCardInfo,
    }),
    [movie, handleShowMovie, isOpenedCard, resetCardInfo],
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
