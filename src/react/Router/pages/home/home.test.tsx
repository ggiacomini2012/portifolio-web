import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';
import globalString from '../../../global/constants/strings/globalStrings';

describe('Home tests:', () => {
  window.history.pushState({}, '', '/');

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has the Developer name on it:', () => {
    expect(screen.getAllByText(new RegExp(globalString.developerName, 'i'))[0]).toBeInTheDocument();
  });

  test('2 - Has a footer with data-testid="footer":', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('3 - Has a developer image or logo with data-testid="profile-picture-container":', () => {
    expect(screen.getByTestId('profile-picture-container')).toBeInTheDocument();
  });

  test(`4 - Has the text "${globalString.english.intro}" data-testid="introduction":`, () => {
    expect(screen.getByTestId('introduction')).toBeInTheDocument();
    expect(screen.getByText(globalString.english.intro)).toBeInTheDocument();
  });
});
