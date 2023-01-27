import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';
import globalStrings from '../../../global/constants/strings/globalStrings';

describe('Contact tests:', () => {
  window.history.pushState({}, '', '/contact');

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test(`1 - Has the text "${globalStrings.english.contactDescription}" in data-testid="contact":`, () => {
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  test(`2 - Has the text "${globalStrings.english.contactDescription}" in data-testid="contact":`, () => {
    expect(screen.getByText(globalStrings.english.contactDescription)).toBeInTheDocument();
  });

  test(`3 - Has the text "${globalStrings.português.contactDescription}" when "português" is selected in data-testid="select-language-button":`, () => {
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'português' } });
    expect(screen.getByText(globalStrings.português.contactDescription)).toBeInTheDocument();
  });
});
