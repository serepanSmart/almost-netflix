import React from 'react';
import { MoviesListProps } from '@/types';
import { fetchDataOnServerSide } from '@/utils';
import { GetServerSideProps } from 'next';
import MainPage from '@/components/MainPage';

export const getServerSideProps: GetServerSideProps = (context) => {
  const { filter, sortBy, sortOrder } = context.query;
  const { searchQuery } = context.params;

  // eslint-disable-next-line max-len
  const QUERY = `?search=${searchQuery}&searchBy=title&sortBy=${sortBy}&sortOrder=${sortOrder}&${
    filter ? `&filter=${filter}` : ''
  }`;
  return fetchDataOnServerSide(QUERY);
};

const SearchQuery: React.FC<MoviesListProps> = ({ list }) => (
  <MainPage list={list} />
);

export default SearchQuery;
