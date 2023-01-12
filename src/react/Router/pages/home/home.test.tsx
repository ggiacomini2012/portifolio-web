import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import globalString from '../../../global/constants/strings/globalStrings';

describe('Home tests:', () => {
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  });

  test('1 - Has the Developer name on it:', () => {
    expect(screen.getByText(globalString.developerName)).toBeInTheDocument();
  });

  test('2 - Has a footer with data-testid="footer":', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('3 - Has a developer image or logo with data-testid="profile-picture-container":', () => {
    expect(screen.getByTestId('profile-picture-container')).toBeInTheDocument();
  });
});
