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

  test(`1 - Has the text "${globalStrings.english.aboutDescription}" in data-testid="about":`, () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  test(`2 - Has the text "${globalStrings.english.aboutDescription}" in data-testid="about":`, () => {
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByText(globalStrings.english.aboutDescription)).toBeInTheDocument();
  });

  test(`3 - Has the text "${globalStrings.português.aboutDescription}" when "português" is selected in data-testid="select-language-button":`, () => {
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'português' } });
    expect(screen.getByText(globalStrings.português.aboutDescription)).toBeInTheDocument();
  });
});
