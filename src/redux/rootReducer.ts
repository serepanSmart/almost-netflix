import { combineReducers } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import { appReducer } from './appReducer';
import { getDataReducer } from './getDataReducer';

export const rootReducer = combineReducers({
  movies: getDataReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppAction<P = void, T extends string = string> = P extends void
  ? { type: T }
  : {
    payload: P;
    type: T;
  };

export type AppThunkAction<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
AppAction
>;
