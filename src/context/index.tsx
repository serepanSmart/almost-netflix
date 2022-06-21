import React from 'react';
import { MoviesContextProvider, useMoviesContext } from './MoviesContext';
import { ModalContextProvider, useModalContext } from './ModalContext';
import { ChildrenProps } from '@/types';

const ContextProvider: React.FC<ChildrenProps> = ({ children }) => (
  <MoviesContextProvider>
    <ModalContextProvider>{children}</ModalContextProvider>
  </MoviesContextProvider>
);

export default ContextProvider;
export { useMoviesContext, useModalContext };