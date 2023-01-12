import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITemplate {
  id: string;
  boolean: boolean;
  number: number;
}

const inicialState: ITemplate[] = [
  { id: 'templateA', boolean: true, number: 0 },
  { id: 'templateB', boolean: false, number: 1 },
];

const sliceTemplate = createSlice({
  name: 'template',
  initialState: inicialState,
  reducers: {
    addTemplate(state, action: PayloadAction<string>) {
      return [...state, { id: action.payload, boolean: false, number: 0 }];
    },
    changeString(state, action: PayloadAction<string>) {
      return state.map((stateElement) => (stateElement.id === action.payload
        ? { ...stateElement, number: stateElement.number + 1 } : stateElement));
    },
  },
});

export default sliceTemplate.reducer;

export const { addTemplate, changeString } = sliceTemplate.actions;

export const useTemplate = (state: any): ITemplate[] => state.template;
