import React from 'react';
import RoutesComponent from '@/Pages';
import ContextProvider from '@/context';
import ModalMovie from '@/components/Modals';

const Providers: React.FC = () => (
  <ContextProvider>
    <ModalMovie />
    <RoutesComponent />
  </ContextProvider>
);

export default Providers;
