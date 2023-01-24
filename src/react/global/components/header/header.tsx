import './css/desktopHeader.css';
import './css/portraitHeader.css';
import './css/landscapeHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLanguage, useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import functions from '../../functions';
import ColorTheme from './components/colorThemeButton/colorTheme';

function Header() {
  const goTo = useNavigate();
  const dispatch = useDispatch();
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  functions.languageSelector(languageState.toTranlate, '');

  return (
    <header id="header" data-testid="header" className={`header${theme}`}>
      <button data-testid="home-button" className={`home-button${theme}`} type="button" onClick={() => goTo('/')}>
        home
      </button>
      <button data-testid="about-button" className={`about-button${theme}`} type="button" onClick={() => goTo('/about')}>
        about
      </button>
      <button data-testid="contact-button" className={`contact-button${theme}`} type="button" onClick={() => goTo('/contact')}>
        contact
      </button>
      <select
        name="select"
        value={languageState.toTranlate}
        data-testid="select-language-button"
        className={`select-language${theme}`}
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
      >
        <option value="english">english</option>
        <option value="portuguese">portuguese</option>
      </select>
      <ColorTheme />
    </header>
  );
}

export default Header;
