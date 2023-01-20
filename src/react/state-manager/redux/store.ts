import { configureStore } from '@reduxjs/toolkit';
import sliceColorTheme from './slices/sliceColorTheme';
import sliceLanguage from './slices/sliceLanguage';
import sliceLanguages from './slices/sliceLanguages';
import sliceTemplate from './slices/sliceTemplate';

const store = configureStore({
  reducer: {
    languages: sliceLanguages,
    template: sliceTemplate,
    language: sliceLanguage,
    colorTheme: sliceColorTheme,
  },
});

export default store;
