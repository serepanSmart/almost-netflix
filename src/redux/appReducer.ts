import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './actionTypes';
import { AnyAction } from 'redux';
import { IAlert } from '@/UI/Alert';

interface State {
  loading: boolean;
  alert: IAlert;
}

const initialState: State = {
  loading: false,
  alert: null,
};

export const appReducer =
(state: State = initialState,
  action: AnyAction): State => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default: return state;
  }
};