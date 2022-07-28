import React from 'react';
import { MoviesListProps } from '@/types';
import { GetServerSideProps } from 'next';
import { queryParams } from '@/context/utils';
import { fetchDataOnServerSide } from '@/utils';
import MainPage from '@/components/MainPage';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl } = context;

  const QUERY = resolvedUrl === '/' ? queryParams : resolvedUrl;

  return fetchDataOnServerSide(QUERY);
};

const Search: React.FC<MoviesListProps> = ({ list }) => (
  <MainPage list={list} />
);

export default Search;
