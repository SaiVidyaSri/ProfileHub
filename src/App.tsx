import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.js';
import CardList from './pages/CardList.js';
import CardDetail from './pages/CardDetail.js';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<CardList />} />
      <Route path="card/:id" element={<CardDetail />} />
    </Route>
  </Routes>
);

export default App;
