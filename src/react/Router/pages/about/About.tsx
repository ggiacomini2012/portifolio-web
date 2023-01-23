import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../../global/components/footer/footer';
import Header from '../../../global/components/header/header';
import functions from '../../../global/functions';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import './css/desktopAbout.css';
import './css/portraitAbout.css';
import './css/landscapeAbout.css';

function About() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  functions.languageSelector(languageState.toTranlate, '');

  useEffect(() => {
    functions.fadeIn('about');
  }, []);

  return (
    <>
      <Header />
      <main id="about" data-testid="about" className={`about${theme} fade-in`}>
        <h1 className={`about-myself${theme}`}>
          Hello I am the about page!
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default About;
