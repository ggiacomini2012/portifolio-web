import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/desktopContact.css';
import './css/portraitContact.css';
import './css/landscapeContact.css';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import functions from '../../../global/functions';
import globalStrings from '../../../global/constants/strings/globalStrings';
import Footer from '../../../global/components/footer/footer';
import Header from '../../../global/components/header/header';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';

function Contact() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranlate, text);

  useEffect(() => {
    functions.fadeIn('contact');
  }, []);

  return (
    <>
      <Header />
      <main id="contact" data-testid="contact" className={`contact-container${theme} fade-in`}>
        <h1 className={`contact-intro${theme}`}>
          {translator(globalStrings.text.contactDescription)}
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
