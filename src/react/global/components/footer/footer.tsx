import './css/desktopFooter.css';
import './css/portraitFooter.css';
import './css/landscapeFooter.css';
import { useSelector } from 'react-redux';
import globalStrings from '../../constants/strings/globalStrings';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import functions from '../../functions';
import githubIcon from '../../../../assets/github-icon.png';

function Footer() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranlate, text);

  return (
    <footer id="footer" className={`footer${theme}`}>
      <a href="https://github.com/ggiacomini2012" target="_blank" rel="noreferrer" data-testid="footer" className={`footer-link${theme}`}>
        © 2023 {translator(globalStrings.text.by)} {globalStrings.developerName}
        <img id="github-icon" className={`github-icon${theme}`} alt="github Icon" src={githubIcon} />
      </a>
    </footer>
  );
}

export default Footer;
