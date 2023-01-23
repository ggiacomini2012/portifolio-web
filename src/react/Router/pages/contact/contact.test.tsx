import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import globalString from '../../../global/constants/strings/globalStrings';
import App from '../../../../App';

describe('Contact tests:', () => {
  window.history.pushState({}, '', '/contact');

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('...Work in Progress...', () => {
    expect(screen.getByText(globalString.english.intro)).toBeInTheDocument();
  });
});
