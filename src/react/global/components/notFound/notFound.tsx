import './css/portraitNotFound.css';
import './css/landscapeNotFound.css';
import './css/desktopNotFound.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useLanguage } from '../../../state-manager/redux/slices/sliceLanguage';
import { useColorTheme } from '../../../state-manager/redux/slices/sliceColorTheme';
import functions from '../../functions';
import globalStrings from '../../constants/strings/globalStrings';

function NotFound() {
  const [languageState] = useSelector(useLanguage);
  const [themeState] = useSelector(useColorTheme);

  const theme = functions.colorThemeSelector(themeState.colorTheme);
  const translator = (text: any) => functions.languageSelector(languageState.toTranslate, text);

  useEffect(() => {
    functions.fadeIn('not-found');
  }, []);

  return (
    <>
      <Header />
      <h1 id="not-found" data-testid="not-found" className={`not-found${theme} fade-in`}>
        {translator(globalStrings.text.notFound)}
      </h1>
      <Footer />
    </>
  );
}

export default NotFound;
