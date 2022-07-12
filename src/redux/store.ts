import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/redux/rootReducer';
import { useDispatch as useDispatchDefault } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = useDispatchDefault;

export default store;
