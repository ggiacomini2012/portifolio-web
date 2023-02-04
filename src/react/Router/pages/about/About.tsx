import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../../global/components/footer/footer';
import Header from '../../../global/components/header/header';
import functions from '../../../global/functions';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import './css/portraitAbout.css';
import './css/landscapeAbout.css';
import './css/desktopAbout.css';
import globalStrings from '../../../global/constants/strings/globalStrings';
import programmer from '../../../../assets/programmer.svg';

function About() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranslate, text);

  useEffect(() => {
    functions.fadeIn('about');
  }, []);

  return (
    <>
      <Header />
      <main id="about" data-testid="about" className={`about${theme} fade-in`}>
        <h1 className={`about-myself${theme}`} data-testid="about-myself">
          {translator(globalStrings.text.aboutDescription)}
        </h1>
        <img
          src={programmer}
          data-testid="about-picture"
          alt="programer working"
          className={`about-picture${theme}`}
        />
      </main>
      <Footer />
    </>
  );
}

export default About;
