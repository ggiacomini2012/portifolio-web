import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';
import globalString from '../../global/constants/strings/globalStrings';

describe.skip('Template tests:', () => {
  window.history.pushState({}, '', '/');

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test.skip('...Work in Progress...', () => {
    expect(screen.getAllByText(new RegExp(globalString.developerName, 'i'))[0]).toBeInTheDocument();
  });
});
