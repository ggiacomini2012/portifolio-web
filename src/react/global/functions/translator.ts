// import globalStrings from '../constants/strings/globalStrings';
import * as Interface from '../constants/strings/strings.interface';

// #REFACTOR
// quero um tradutor universar que envie todos os textos, traduza,
//  e devolva em um objeto igual ao da global strings

const translator = (language: keyof Interface.IAllLanguages, text: keyof Interface.ITexts) => {
  const textCheck = text;
  return `text: ${textCheck} translated to: ${language}`;
};

export default translator;
