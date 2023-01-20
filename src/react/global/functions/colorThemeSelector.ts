import globalStrings from '../constants/strings/globalStrings';
import * as Interface from '../constants/strings/strings.interface';

const queryTheme = (
  theme: keyof Interface.IAllColorThemes,
) => globalStrings.colorTheme[theme];

const selectTheme = (selectedTheme: any) => {
  const theme = selectedTheme as keyof Interface.IAllColorThemes;
  return queryTheme(theme);
};

export default selectTheme;
