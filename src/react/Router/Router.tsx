import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import functions from '../global/functions';
import { useColorTheme } from '../state-manager/redux/slices/sliceColorTheme';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ReduxPlayground from './pages/reduxPlayground/ReduxPlayground';
import './Router.css';

function Router() {
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  return (
    <div className={`router${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redux-playground" element={<ReduxPlayground />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
