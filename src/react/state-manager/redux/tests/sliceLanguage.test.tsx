import { configureStore } from '@reduxjs/toolkit';
import sliceLanguage, { changeLanguage } from '../slices/sliceLanguage';

describe('Redux SliceLanguage test:', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({ reducer: { sliceLanguage } });
  });

  it('1 - Should change the color theme when changeColorTheme action is dispatched:', () => {
    store.dispatch(changeLanguage('português'));
    const state = store.getState();
    const sliceLanguageState = [{
      toTranslate: 'português',
    }];
    expect(state.sliceLanguage).toEqual(sliceLanguageState);
  });
  it('2 - Should change back the color theme when changeColorTheme action is dispatched twice:', () => {
    store.dispatch(changeLanguage('english'));
    const state = store.getState();
    const sliceLanguageState = [{
      toTranslate: 'english',
    }];
    expect(state.sliceLanguage).toEqual(sliceLanguageState);
  });
});
