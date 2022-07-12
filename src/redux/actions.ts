import {
  FETCH_MOVIES,
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  SHOW_ALERT,
} from './actionTypes';
import { URL } from '@/constants';
import { AppAction, AppThunkAction } from './rootReducer';
import { createAction } from '@reduxjs/toolkit';

export const showLoader = (): AppAction<void, typeof SHOW_LOADER> => {
  return { type: SHOW_LOADER };
};

// export const hideLoader = (): AppAction<void, typeof HIDE_LOADER> => {
//   return { type: HIDE_LOADER };
// };

// Alternative (maybe more readable): ==> I WILL LEAVE IT HERE FOR NOW
export const hideLoader = createAction(HIDE_LOADER);

// createAsyncThunk could be used as alternative, but it will require args format change
export const showAlert = (
  title: string,
  message: string,
  type = 'error',
): AppThunkAction => {
  return (dispatch) => {
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
    }, 4000);
  };
};

export const hideAlert = (): AppAction => {
  return { type: HIDE_ALERT };
};

// fetch movies by default with loading imitation
export const fetchMovies = (query = ''): AppThunkAction => {
  return async (dispatch) => {
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
