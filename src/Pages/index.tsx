import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@/Pages/NotFound';
import MainPage from '@/Pages/MainPage';
import { rootPath } from '@/constants';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={rootPath} />} />
      <Route path={`${rootPath}/*`} element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
