import { ITab, Option } from '@/UI';
import movies, { IMovie } from '@/service/movies';
import { filters } from '@/containers/Controls';
import { sortByField } from '@/utils';

export const defaultOptions: Option[] = [
  { value: 'year', label: 'Release Date' },
  { value: 'genre', label: 'Genre' },
];

type State = {
  movies: IMovie[];
  filters?: ITab[];
  selectedOption?: Option;
};

export const initialState: State = {
  movies: movies.sort(sortByField(defaultOptions[0])),
  filters,
  selectedOption: defaultOptions[0],
};

const setActiveFilter = (state: State, payload: string): ITab[] => {
  state.filters.find(tab => tab.active).active = false;
  state.filters.find(tab =>
    tab.value === payload).active = true;
  return state.filters;
};

const filterMoviesHandler = (state: State, payload: string): IMovie[] => {
  setActiveFilter(state, payload);
  state.movies = movies;
  return state.movies.filter(movie => payload === 'All'
    ? movies
    : movie.genre === payload);
};

const sortMoviesHandler = (state: State, payload: string): IMovie[] => {
  return state.movies.sort(sortByField(payload));
};

export const reducer = (state: State, action): State => {
  const { type, payload } = action;

  switch (type) {
    case 'sort':
      return {
        ...state,
        movies: sortMoviesHandler(state, payload),
        selectedOption: payload,
      };
    case 'genre':
      return {
        ...state,
        movies: filterMoviesHandler(state, payload),
        filters: [...filters],
      };
    default:
      return state;
  }
};
