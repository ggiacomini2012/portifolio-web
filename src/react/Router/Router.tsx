import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import functions from '../global/functions';
import { useColorTheme } from '../state-manager/redux/slices/sliceColorTheme';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import './Router.css';
import NotFound from '../global/components/notFound/notFound';

function Router() {
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  return (
    <div id="router" className={`router${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
