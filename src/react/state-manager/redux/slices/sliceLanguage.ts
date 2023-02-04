import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILanguage {
  toTranslate: string;
}

const inicialState: ILanguage[] = [
  {
    toTranslate: 'english',
  },
];

const sliceLanguage = createSlice({
  name: 'language',
  initialState: inicialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      return state.map((stateElement) => (stateElement.toTranslate !== action.payload
        ? { toTranslate: action.payload }
        : stateElement));
    },
  },
});

export default sliceLanguage.reducer;

export const { changeLanguage } = sliceLanguage.actions;

export const useLanguage = (state: any): ILanguage[] => state.language;
