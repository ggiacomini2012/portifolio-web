interface ITexts {
  intro: string;
  by: string;
  home: string;
  about: string;
  aboutDescription: string;
  contact: string;
  contactDescription: string;
  portfolio: string;
  notFound: string;
}

interface IAllLanguages {
  text: ITexts;
  english: ITexts;
  português: ITexts;
  español: ITexts;
  中文: ITexts;
}

interface IAllColorThemes {
  darkMode: string;
  lightMode: string;
}

interface IColorTheme {
  colorTheme: IAllColorThemes;
}

interface IDeveloper {
  developerName: string;
}

interface IExceptions {
  randomAnswer: string;
}

interface IAllStrings extends IColorTheme, IAllLanguages, IDeveloper, IExceptions {}

export type {
  IAllLanguages, ITexts, IAllColorThemes, IAllStrings, IColorTheme,
};
