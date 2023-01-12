import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILanguages {
  name: string;
  favorite: boolean;
}

const inicialState: ILanguages[] = [
  { name: 'JAVA', favorite: false },
  { name: 'CSS', favorite: false },
];

const sliceLanguages = createSlice({
  name: 'languages',
  initialState: inicialState,
  reducers: {
    addLanguages(state, action: PayloadAction<string>) {
      return [...state, { name: action.payload, favorite: false }];
    },
    toFavorite(state, action: PayloadAction<string>) {
      return state.map((stateElement) => (stateElement.name === action.payload
        ? { ...stateElement, favorite: !stateElement.favorite } : stateElement));
    },
  },
});

export default sliceLanguages.reducer;

export const { addLanguages, toFavorite } = sliceLanguages.actions;

export const useLanguages = (state: any): ILanguages[] => state.languages;
