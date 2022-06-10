import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { getDataReducer } from './getDataReducer';

export const rootReducer = combineReducers({
  movies: getDataReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;