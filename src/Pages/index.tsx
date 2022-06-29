import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@/Pages/NotFound';
import MainPage from '@/Pages/MainPage';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search/*" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
