import React from 'react';
import { Loader } from '@/UI';

const WithLoading = (Component: React.ElementType): React.FC => {
  const WithLoadingComponent: React.ElementType<{ isLoading: boolean }> = (
    {
      isLoading,
      ...props
    }) => {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return <Loader />;
  };

  return WithLoadingComponent;
};

export default WithLoading;