import { createSlice } from '@reduxjs/toolkit';

interface IColorTheme {
  chooseColorTheme: boolean;
  colorTheme: string
}

const inicialState: IColorTheme[] = [
  {
    chooseColorTheme: true,
    colorTheme: 'darkMode',
  },
];

const sliceColorTheme = createSlice({
  name: 'colorTheme',
  initialState: inicialState,
  reducers: {
    changeColorTheme(state) {
      return state.map((stateElement) => (stateElement.chooseColorTheme
        ? {
          chooseColorTheme: false,
          colorTheme: 'lightMode',
        } : {
          chooseColorTheme: true,
          colorTheme: 'darkMode',
        }));
    },
  },
});

export default sliceColorTheme.reducer;

export const { changeColorTheme } = sliceColorTheme.actions;

export const useColorTheme = (state: any): IColorTheme[] => state.colorTheme;
