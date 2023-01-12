import { configureStore } from '@reduxjs/toolkit';
import sliceLanguages from './slices/sliceLanguages';
import sliceTemplate from './slices/sliceTemplate';

const store = configureStore({
  reducer: {
    languages: sliceLanguages,
    template: sliceTemplate,
  },
});

export default store;
