import globalStrings from '../constants/strings/globalStrings';
import * as Interface from '../constants/strings/strings.interface';
import functions from '.';

const queryLanguageText = (
  language: keyof Interface.IAllLanguages,
  text: keyof Interface.ITexts,
) => globalStrings[language][text];

const selectLanguage = (selectedLanguage: any, selectedText: any) => {
  const language = selectedLanguage as unknown as keyof Interface.IAllLanguages;
  const text = selectedText as keyof Interface.ITexts;
  if (language === 'english' || language === 'portuguese') {
    return queryLanguageText(language, text);
  }
  return functions.translator(language, text);
};

export default selectLanguage;
