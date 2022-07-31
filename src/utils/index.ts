/* eslint-disable max-len */
import React from 'react';
import { API } from '@/constants';
import { FETCH_MOVIES } from '@/redux/actionTypes';
import store from '@/redux/store';
import { IMovie } from '@/service';
import {
  DEFAULT_SEARCH_PARAM,
  DEFAULT_SORT_VALUE,
  DEFAULT_SORT_ORDER
} from '@/constants';

interface FetchDataProps {
  props: { list: IMovie[] | Record<string, unknown>; movie?: IMovie };
  redirect?: {
    permanent: boolean;
    destination: string;
  };
}

export const fetchDataOnServerSide = async (
  query: Record<string, string>
): Promise<FetchDataProps> => {
  const { filter, movie, sortBy, sortOrder, searchQuery } = query;

  const moviesRequestQueryParams = {
    search: searchQuery,
    searchBy: DEFAULT_SEARCH_PARAM,
    sortBy: sortBy || DEFAULT_SORT_VALUE,
    sortOrder: sortOrder || DEFAULT_SORT_ORDER,
    filter,
  };

  for (const key in moviesRequestQueryParams) {
    if (moviesRequestQueryParams[key] === undefined) {
      delete moviesRequestQueryParams[key];
    }
  }

  const moviesRequestQueryString = Object.keys(moviesRequestQueryParams).length
    ? `?${new URLSearchParams(moviesRequestQueryParams).toString()}`
    : '';

  const response: FetchDataProps = {
    props: { list: [] },
  };

  const promisesArray: Promise<void>[] = [
    fetch(`${API}${moviesRequestQueryString}`).then((moviesResponse) =>
      moviesResponse.json().then((moviesResponseJson) => {
        if (moviesResponseJson) {
          store.dispatch({ type: FETCH_MOVIES, payload: moviesResponseJson });
          response.props.list = moviesResponseJson.data;
        } else {
          response.redirect = { permanent: false, destination: '/' };
        }
      }),
    ),
  ];

  if (movie) {
    promisesArray.push(
      fetch(`${API}/${movie}`).then((movieResponse) =>
        movieResponse.json().then((movieResponseJson) => {
          response.props.movie = movieResponseJson;
        }),
      ),
    );
  }

  return Promise.all(promisesArray).then(() => response);
};

export function sortByField<T>(field: T) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

export const imgPlaceholder =
  'https://sd.keepcalms.com/i/sorry-no-picture-available.png';

export const addDefaultSrc = (e: React.ChangeEvent<HTMLImageElement>): void => {
  e.target.src = 'https://sd.keepcalms.com/i/sorry-no-picture-available.png';
};
