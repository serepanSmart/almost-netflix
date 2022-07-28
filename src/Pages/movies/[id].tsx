import React from 'react';
import { GetServerSideProps } from 'next';
import CardContainer from '@/components/CardContainer';
import { API } from '@/constants';
import store from '@/redux/store';
import { FETCH_MOVIES } from '@/redux/actionTypes';
import { IMovie } from '@/service';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${API}/${id}`);

  const json = await response.json();

  if (!json) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: { id: null },
    };
  }
  store.dispatch({
    type: FETCH_MOVIES,
    payload: json,
  });

  return {
    props: {
      movie: { ...store.getState().movies.moviesList },
    },
  };
};

const MovieDetails: React.FC<{ movie: IMovie }> = ({ movie }) => (
  <CardContainer movie={movie} />
);

export default MovieDetails;
