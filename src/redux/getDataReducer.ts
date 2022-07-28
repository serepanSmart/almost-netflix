import { IMovie } from '@/service';
import { FETCH_MOVIES } from './actionTypes';
import { AnyAction } from 'redux';

interface State {
  moviesList: { data: IMovie[] };
  movie: IMovie;
}

const initialState: State = {
  moviesList: { data: [] },
  movie: null
};

export const getDataReducer =
  (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
      case FETCH_MOVIES:
        return {
          ...state,
          moviesList: action.payload,
        };
      default: return state;
    }
  };