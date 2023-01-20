import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILanguage {
  toTranlate: string;
}

const inicialState: ILanguage[] = [
  {
    toTranlate: 'english',
  },
];

const sliceLanguage = createSlice({
  name: 'language',
  initialState: inicialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      return state.map((stateElement) => (stateElement.toTranlate !== action.payload
        ? { toTranlate: action.payload } : stateElement));
    },
  },
});

export default sliceLanguage.reducer;

export const { changeLanguage } = sliceLanguage.actions;

export const useLanguage = (state: any): ILanguage[] => state.language;
