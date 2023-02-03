import { configureStore } from '@reduxjs/toolkit';
import sliceColorTheme, { changeColorTheme } from '../slices/sliceColorTheme';

describe('Redux SliceColorTheme test:', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({ reducer: { sliceColorTheme } });
  });

  it('1 - Should change the color theme when changeColorTheme action is dispatched:', () => {
    store.dispatch(changeColorTheme());
    const state = store.getState();
    const sliceColorThemeState = [{
      chooseColorTheme: false,
      colorTheme: 'lightMode',
    }];
    expect(state.sliceColorTheme).toEqual(sliceColorThemeState);
  });
  it('2 - Should change back the color theme when changeColorTheme action is dispatched twice:', () => {
    store.dispatch(changeColorTheme());
    store.dispatch(changeColorTheme());
    const state = store.getState();
    const sliceColorThemeState = [{
      chooseColorTheme: true,
      colorTheme: 'darkMode',
    }];
    expect(state.sliceColorTheme).toEqual(sliceColorThemeState);
  });
});
