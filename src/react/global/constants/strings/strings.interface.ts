interface ITexts {
  intro: string;
  by: string;
}

interface IAllLanguages {
  text: ITexts;
  english: ITexts;
  portuguese: ITexts;
}

interface IAllColorThemes {
  darkMode: string;
  lightMode: string;
}

interface IColorTheme {
  colorTheme: IAllColorThemes
}

interface IDeveloper {
  developerName: string
}

interface IAllStrings extends IColorTheme, IAllLanguages, IDeveloper {}

export type {
  IAllLanguages, ITexts, IAllColorThemes, IAllStrings, IColorTheme,
};
