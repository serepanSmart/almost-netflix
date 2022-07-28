/* eslint-disable max-len */
import React from 'react';
import { API } from '@/constants';
import { FETCH_MOVIES } from '@/redux/actionTypes';
import store from '@/redux/store';
import { IMovie } from '@/service';

interface FetchDataProps {
  props: { list: IMovie[] | Record<string, unknown> };
  redirect?: {
    permanent: boolean;
    destination: string;
  };
}

export const fetchDataOnServerSide = async (QUERY: string): Promise<FetchDataProps> => {

  const response = await fetch(`${API}${QUERY}`);

  const json = await response.json();

  if (!json) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: { list: {} },
    };
  }
  store.dispatch({
    type: FETCH_MOVIES,
    payload: json,
  });

  return {
    props: {
      list: store.getState().movies.moviesList.data,
    },
  };
};

export function sortByField<T>(field: T) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

export const imgPlaceholder = 'https://sd.keepcalms.com/i/sorry-no-picture-available.png';

export const addDefaultSrc = (e: React.ChangeEvent<HTMLImageElement>): void => {
  e.target.src = 'https://sd.keepcalms.com/i/sorry-no-picture-available.png';
};