import React, { useEffect } from 'react';
import './css/desktopHome.css';
import './css/portraitHome.css';
import './css/landscapeHome.css';
import { useSelector } from 'react-redux';
import guilherme from '../../../../assets/profile-picture.png';
import Footer from '../../../global/components/footer/footer';
import globalStrings from '../../../global/constants/strings/globalStrings';
import functions from '../../../global/functions';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import Header from '../../../global/components/header/header';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';

function Home() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranlate, text);

  useEffect(() => {
    functions.fadeIn('home');
  }, []);

  return (
    <>
      <Header />
      <main id="home" data-testid="home" className={`home${theme} fade-in`}>
        <section className={`figure-container${theme}`}>
          <figure data-testid="profile-picture-container" id="profile-picture-container" className={`profile-picture-container${theme}`}>
            <img src={guilherme} alt="guilherme profile" className={`profile-picture${theme}`} />
            <div id="fade-effect-for-profile-picture" className={`fade-effect${theme}`} />
          </figure>
        </section>
        <section data-testid="introduction" className={`introduction-container${theme}`}>
          <h1 className={`introduction${theme}`}>
            {translator(globalStrings.text.intro)}
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
