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
import { ChildrenProps } from '@/types';
import { urlConstructor, defaultOption, queryParams } from './utils';
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IContextProps {
  handleInputChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  resetCardInfo: () => void;
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  search?: string;
  queryParameters: string;
  setQueryParameters: Dispatch<SetStateAction<string>>;
  movieId: string;
  setMovieId: Dispatch<SetStateAction<string>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
  filterValue: string | string[];
  setFilterValue: Dispatch<SetStateAction<string | string[]>>;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  // NEXT ROUTER HOOKS
  const { query } = useRouter();
  const { search, searchQuery, filter, movie } = query;

  const initSearchValue = searchQuery ? searchQuery.toString() : '';

  // INITIAL STATES FOR QUERY URL PARAMS
  const [searchInputValue, setSearchInputValue] =
    useState<string>(initSearchValue);

  const [queryParameters, setQueryParameters] = useState<string>(
    `${searchInputValue}${queryParams}`,
  );
  const [movieId, setMovieId] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>(defaultOption);
  const [filterValue, setFilterValue] = useState<string | string[]>(
    filter || '',
  );

  useEffect(() => {
    // ACCORDING TO NEXT.JS DOCS IT PREVENTS react-hydration-error, https://nextjs.org/docs/messages/react-hydration-error
    if (movie) {
      setMovieId(movie.toString());
    }
  }, [movie]);

  useEffect(() => {
    if (search !== searchQuery) {
      router.push(
        `${searchQuery}${urlConstructor(
          sortValue,
          filterValue,
          undefined,
          searchQuery,
        )}`,
      );
    }
  }, [filterValue, movie, search, searchQuery, sortValue]);

  const handleInputChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>): void => {
      setSearchInputValue(e.currentTarget.value);
    },
    [],
  );

  // ON CLICK CARD TO SHOW INFO IN THE BANNER
  const resetCardInfo = useCallback(() => {
    setMovieId('');
    const setParams =
      searchInputValue +
      urlConstructor(sortValue, filterValue, '', searchInputValue);
    setQueryParameters(setParams);
    router.push(setParams);
  }, [filterValue, searchInputValue, sortValue]);

  const value = useMemo<IContextProps>(
    () => ({
      resetCardInfo,
      searchInputValue,
      handleInputChange,
      queryParameters,
      setQueryParameters,
      sortValue,
      setSortValue,
      filterValue,
      setFilterValue,
      setSearchInputValue,
      movieId,
      setMovieId,
    }),
    [
      resetCardInfo,
      searchInputValue,
      handleInputChange,
      queryParameters,
      sortValue,
      filterValue,
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
