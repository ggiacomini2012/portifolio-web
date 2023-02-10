import globalStrings from '../constants/strings/globalStrings';
import * as Interface from '../constants/strings/strings.interface';

const queryLanguageText = (
  language: keyof Interface.IAllLanguages,
  text: keyof Interface.ITexts,
) => globalStrings[language][text];

const selectLanguage = (selectedLanguage: any, selectedText: any) => {
  const language = selectedLanguage as unknown as keyof Interface.IAllLanguages;
  const text = selectedText as keyof Interface.ITexts;
  if (language === 'english' || language === 'português' || language === 'español') {
    return queryLanguageText(language, text);
  }
  return 'The language selected is neither English nor Portuguese or Spanish. A língua selecionada não é nem inglês nem português nem espanhol.';
};

export default selectLanguage;
