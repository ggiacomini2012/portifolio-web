import React from 'react';
import './css/desktopProjectsDisplay.css';
import './css/portraitProjectsDisplay.css';
import './css/landscapeProjectsDisplay.css';
// import globalString from '../../constants/strings';
// import s from './constants/strings';
import { useSelector } from 'react-redux';
import pixelArt from '../../../../../../assets/pixel-art-gif.gif';
import calculator from '../../../../../../assets/js-v-calculator.gif';
import { useLanguage } from '../../../../../state-manager/redux/slices/sliceLanguage';
import { useColorTheme } from '../../../../../state-manager/redux/slices/sliceColorTheme';
import functions from '../../../../../global/functions';

function ProjectsDisplay() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranlate, text);
  console.log(translator);

  return (
    <>
      <section id="project-display-container-1" data-testid="project-display-container-1" className={`project-display-container${theme}`}>
        Pixel-Art
        <img data-testid="project-display-image-1" src={pixelArt} alt="bla" className={`project-display-image${theme}`} />
        <a href="https://js-v-pixel-art.netlify.app/" data-testid="project-display-button-deploy-link-1" target="_blank" rel="noreferrer" className={`project-display-button-deploy-link${theme}`}>
          <button data-testid="project-display-button-deploy-1" type="button" className={`project-display-button-deploy${theme}`}>deploy</button>
        </a>
        <a href="https://github.com/ggiacomini2012/pixel-art-js-vanilla" data-testid="project-display-button-github-link-1" target="_blank" rel="noreferrer" className={`project-display-button-github-link${theme}`}>
          <button data-testid="project-display-button-github-1" type="button" className={`project-display-button-github${theme}`}>github</button>
        </a>
      </section>
      <section id="project-display-container-2" data-testid="project-display-container-2" className={`project-display-container${theme}`}>
        Calculator
        <img data-testid="project-display-image-2" src={calculator} alt="bla" className={`project-display-image${theme}`} />
        <a href="https://js-v-calculator.netlify.app/" data-testid="project-display-button-deploy-link-2" target="_blank" rel="noreferrer" className={`project-display-button-deploy-link${theme}`}>
          <button data-testid="project-display-button-deploy-2" type="button" className={`project-display-button-deploy${theme}`}>deploy</button>
        </a>
        <a href="https://github.com/ggiacomini2012/calculadora-js-vanilla" data-testid="project-display-button-github-link-2" target="_blank" rel="noreferrer" className={`project-display-button-github-link${theme}`}>
          <button data-testid="project-display-button-github-2" type="button" className={`project-display-button-github${theme}`}>github</button>
        </a>
      </section>
    </>
  );
}

export default ProjectsDisplay;
