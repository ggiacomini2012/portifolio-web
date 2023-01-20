import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/desktopReduxPlayground.css';
import './css/portraitReduxPlayground.css';
import './css/landscapeReduxPlayground.css';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import functions from '../../../global/functions';
import globalStrings from '../../../global/constants/strings/globalStrings';
import Footer from '../../../global/components/footer/footer';
import Header from '../../../global/components/header/header';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';

function ReduxPlayground() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranlate, text);

  useEffect(() => {
    functions.fadeIn('redux-playground');
  }, []);

  return (
    <>
      <Header />
      <main id="redux-playground" className={`redux-playground-container${theme} fade-in`}>
        <h1 className={`redux-playground-intro${theme}`}>
          {translator(globalStrings.text.intro)}
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default ReduxPlayground;
