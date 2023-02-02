import { expect } from 'vitest';
import functions from '..';
import globalStrings from '../../constants/strings/globalStrings';

describe('LanguageSelector function tests:', () => {
  it('1 - Should be a function', () => {
    expect(typeof functions.languageSelector === 'function').toBe(true);
  });
  it(`2 - Should return "${globalStrings.randomAnswer}" when first parameter is not english or português`, () => {
    expect(functions.languageSelector('bob', 'random')).eq(globalStrings.randomAnswer);
  });
  it(`3 - Should return "${globalStrings.english.intro}" when first parameter is english and secound is intro`, () => {
    expect(functions.languageSelector('english', 'intro')).eq(globalStrings.english.intro);
  });
  it(`4 - Should return "${globalStrings.português.intro}" when first parameter is português and secound is intro`, () => {
    expect(functions.languageSelector('português', 'intro')).eq(globalStrings.português.intro);
  });
});
