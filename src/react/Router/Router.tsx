import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ReduxPlayground from './pages/reduxPlayground/ReduxPlayground';
import ReduxSibling from './pages/reduxSibling/ReduxSibling';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/redux-playground" element={<ReduxPlayground />} />
        <Route path="/redux-sibling" element={<ReduxSibling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
