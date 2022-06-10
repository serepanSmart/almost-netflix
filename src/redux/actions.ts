
import { AnyAction } from 'redux';
import {
  FETCH_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  SHOW_ALERT
} from './actionTypes';
import { URL } from '@/constants';

export const showLoader = (): AnyAction => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = (): AnyAction => {
  return {
    type: HIDE_LOADER,
  };
};

export const showAlert = (title: string, message: string, type = 'error') => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        title,
        message,
        type,
      },
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const hideAlert = (): AnyAction => {
  return {
    type: HIDE_ALERT,
  };
};

// fetch movies by default with loading imitation
export const fetchMovies = (query = ''): any => {   // THIS NEEDS TO BE CLARIFIED, IT CAUSES TS ERRORS (WARNINGS) WHEN CALL FETCH FUNCTION
  return async (dispatch: any) => {
    try {
      dispatch(showLoader());
      const response = await fetch(URL + query);
      const json = await response.json();
      setTimeout(() => {
        dispatch({
          type: FETCH_MOVIES,
          payload: json,
        });
        dispatch(hideLoader());
      }, 500);
    } catch (e) {
      dispatch(showAlert('Server Error', 'Someting went wrong'));
      dispatch(hideLoader());
    }
  };
};
