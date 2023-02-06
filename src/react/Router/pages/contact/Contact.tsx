import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/portraitContact.css';
import './css/landscapeContact.css';
import './css/desktopContact.css';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import functions from '../../../global/functions';
import globalStrings from '../../../global/constants/strings/globalStrings';
import Footer from '../../../global/components/footer/footer';
import Header from '../../../global/components/header/header';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import linkedin from '../../../../assets/linkedin.svg';
import instagram from '../../../../assets/instagram.svg';
import youtube from '../../../../assets/youtube.svg';

function Contact() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranslate, text);

  useEffect(() => {
    functions.fadeIn('contact');
  }, []);

  return (
    <>
      <Header />
      <main id="contact" data-testid="contact" className={`contact${theme} fade-in`}>
        <h1 className={`contact-intro${theme}`}>
          {translator(globalStrings.text.contactDescription)}
        </h1>
        <a
          href="https://www.linkedin.com/in/guilhermegiacominidev/"
          data-testid="contact-icon-linkedin"
          target="_blank"
          rel="noreferrer"
          className={`contact-icon-link${theme}`}
        >
          <img src={linkedin} alt="programer linkedin" className={`contact-icon${theme}`} />
        </a>
        <a
          href="https://www.instagram.com/guilhermegiacomini.dev/"
          data-testid="contact-icon-instagram"
          target="_blank"
          rel="noreferrer"
          className={`contact-icon-link${theme}`}
        >
          <img src={instagram} alt="programer instagram" className={`contact-icon${theme}`} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCROYQOCi1hugmsrRBz73U2A"
          data-testid="contact-icon-youtube"
          target="_blank"
          rel="noreferrer"
          className={`contact-icon-link${theme}`}
        >
          <img src={youtube} alt="programer youtube" className={`contact-icon${theme}`} />
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
