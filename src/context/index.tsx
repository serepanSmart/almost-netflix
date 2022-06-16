import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
} from 'react';
import { ChildrenProps } from '@/types';
import { IMovie } from '@/service';

interface IContextProps {
  movie: IMovie;
  setMovie: (data: IMovie) => void;
  isOpenedCard: boolean;
  setOpenedCard: (e: React.SetStateAction<boolean>) => void;
  handleShowMovie: (data: IMovie) => void;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  // ON CLICK CARD TO SHOW INFO IN THE BANNER
  const [movie, setMovie] = useState<IMovie>(null);
  const [isOpenedCard, setOpenedCard] = useState(false);

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
    }),
    [movie, setMovie, isOpenedCard, setOpenedCard, handleShowMovie],
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
