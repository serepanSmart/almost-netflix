import React from 'react';
import { MoviesListProps } from '@/types';
import { fetchDataOnServerSide } from '@/utils';
import { GetServerSideProps } from 'next';
import MainPage from '@/components/MainPage';

export const searchPageServerSidePropsGetter: GetServerSideProps = (
  context,
) => {
  return fetchDataOnServerSide(context.query as Record<string, string>);
};

const SearchPage: React.FC<MoviesListProps> = ({ list, movie }) => (
  <MainPage list={list} movie={movie} />
);

export default SearchPage;
