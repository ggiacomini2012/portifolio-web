import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ReduxPlayground from './pages/reduxPlayground/ReduxPlayground';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/redux-playground" element={<ReduxPlayground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
