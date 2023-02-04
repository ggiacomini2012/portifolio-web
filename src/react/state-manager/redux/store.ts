import { configureStore } from '@reduxjs/toolkit';
import sliceColorTheme from './slices/sliceColorTheme';
import sliceLanguage from './slices/sliceLanguage';

const store = configureStore({
  reducer: {
    language: sliceLanguage,
    colorTheme: sliceColorTheme,
  },
});

export default store;
