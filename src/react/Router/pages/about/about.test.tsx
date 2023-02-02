import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';
import globalStrings from '../../../global/constants/strings/globalStrings';

describe('About tests:', () => {
  window.history.pushState({}, '', '/about');

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has the tag type "MAIN" in data-testid="about":', () => {
    expect(screen.getByTestId('about').tagName).toBe('MAIN');
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  test(`2 - Has the text "${globalStrings.english.aboutDescription}" in data-testid="about-myself":`, () => {
    expect(screen.getByText(globalStrings.english.aboutDescription)).toBeInTheDocument();
  });

  test(`3 - Has the text "${globalStrings.português.aboutDescription}" when "português" is selected in data-testid="select-language-button":`, () => {
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'português' } });
    expect(screen.getByText(globalStrings.português.aboutDescription)).toBeInTheDocument();
  });
  test('4 - 1 - Has the tag type "IMG" in data-testid="about-picture":', () => {
    expect(screen.getByTestId('about-picture').tagName).toBe('IMG');
    expect(screen.getByTestId('about-picture')).toBeInTheDocument();
  });
});
