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
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IContextProps {
  handleInputChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  search?: string;
}

const MoviesContext = createContext<IContextProps | null>(null);

const MoviesContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  // NEXT ROUTER HOOKS
  const { query } = useRouter();
  const { search, searchQuery } = query;

  const initSearchValue = searchQuery ? searchQuery.toString() : '';

  // INITIAL STATES FOR QUERY URL PARAMS
  const [searchInputValue, setSearchInputValue] =
    useState<string>(initSearchValue);

  useEffect(() => {
    const UrlParams = {
      ...query,
      search: searchQuery && searchQuery.toString() || '',
    };
    if (search !== searchQuery) {
      router.push(
        `/${searchQuery}?${new URLSearchParams(UrlParams).toString()}`,
      );
    }
  }, [query, search, searchQuery]);

  const handleInputChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>): void => {
      setSearchInputValue(e.currentTarget.value);
    },
    [],
  );

  const value = useMemo<IContextProps>(
    () => ({
      searchInputValue,
      handleInputChange,
      setSearchInputValue,
    }),
    [handleInputChange, searchInputValue],
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
