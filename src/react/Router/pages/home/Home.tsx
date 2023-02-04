import React, { useEffect } from 'react';
import './css/portraitHome.css';
import './css/landscapeHome.css';
import './css/desktopHome.css';
import { useSelector } from 'react-redux';
import guilherme from '../../../../assets/profile-picture.png';
import Footer from '../../../global/components/footer/footer';
import globalStrings from '../../../global/constants/strings/globalStrings';
import functions from '../../../global/functions';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import Header from '../../../global/components/header/header';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import ProjectsDisplay from './components/projectsDisplay/ProjectsDisplay';

// const homeVariables = {
//   translator: (text: any) => text,
// };

function Home() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranslate, text);

  // homeVariables.translator = translator;

  useEffect(() => {
    functions.fadeIn('home');
  }, []);

  return (
    <>
      <Header />
      <main id="home" data-testid="home" className={`home${theme} fade-in`}>
        <section className={`figure-container${theme}`}>
          <figure
            data-testid="profile-picture-container"
            id="profile-picture-container"
            className={`profile-picture-container${theme}`}
          >
            <img src={guilherme} alt="guilherme profile" className={`profile-picture${theme}`} />
            <div id="fade-effect-for-profile-picture" className={`fade-effect${theme}`} />
          </figure>
        </section>
        <section data-testid="introduction" className={`introduction-container${theme}`}>
          <h1 data-testid="introduction-text" className={`introduction${theme}`}>
            {translator(globalStrings.text.intro)}
          </h1>
        </section>
        <section
          id="section-display-container-container"
          data-testid="section-display-container-container"
          className={`section-display-container-container${theme}`}
        >
          <div className={`portifolio${theme}`}>
            ✣ {translator(globalStrings.text.portifolio)} ✣
          </div>
          <div
            id="all-projects-display"
            data-testid="all-projects-display"
            className={`all-projects-display${theme}`}
          >
            <ProjectsDisplay />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export { homeVariables };

export default Home;
