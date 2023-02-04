import './css/portraitHeader.css';
import './css/landscapeHeader.css';
import './css/desktopHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLanguage, useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import functions from '../../functions';
import ColorTheme from './components/colorThemeButton/colorTheme';
import globalStrings from '../../constants/strings/globalStrings';

function Header() {
  const goTo = useNavigate();
  const dispatch = useDispatch();
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranslate, text);

  return (
    <header id="header" data-testid="header" className={`header${theme}`}>
      <button
        data-testid="home-button"
        className={`home-button${theme}`}
        type="button"
        onClick={() => goTo('/')}
      >
        {translator(globalStrings.text.home)}
      </button>
      <button
        data-testid="about-button"
        className={`about-button${theme}`}
        type="button"
        onClick={() => goTo('/about')}
      >
        {translator(globalStrings.text.about)}
      </button>
      <button
        data-testid="contact-button"
        className={`contact-button${theme}`}
        type="button"
        onClick={() => goTo('/contact')}
      >
        {translator(globalStrings.text.contact)}
      </button>
      <select
        name="select"
        value={languageState.toTranslate}
        data-testid="select-language-button"
        className={`select-language${theme}`}
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
      >
        <option value="english">english</option>
        <option value="português">português</option>
      </select>
      <ColorTheme />
    </header>
  );
}

export default Header;
