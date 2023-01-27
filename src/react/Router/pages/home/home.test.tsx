import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';
import globalStrings from '../../../global/constants/strings/globalStrings';
// import { homeVariables } from './Home';

describe('Home tests:', () => {
  window.history.pushState({}, '', '/');

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has the Developer name on it:', () => {
    expect(screen.getAllByText(new RegExp(globalStrings.developerName, 'i'))[0]).toBeInTheDocument();
  });

  test('2 - Has a footer with data-testid="footer":', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('3 - Has a developer image or logo with data-testid="profile-picture-container":', () => {
    expect(screen.getByTestId('profile-picture-container')).toBeInTheDocument();
  });

  test(`4 - Has the text "${globalStrings.english.intro}" data-testid="introduction":`, () => {
    expect(screen.getByTestId('introduction')).toBeInTheDocument();
    expect(screen.getByText(globalStrings.english.intro)).toBeInTheDocument();
  });

  test(`5 - Has the text "${globalStrings.português.intro}" when "português" is selected in data-testid="select-language-button":`, () => {
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'português' } });
    expect(screen.getByTestId('introduction-text')).toHaveTextContent(globalStrings.português.intro);
  });

  test('6 - Has a projects display with data-testid="projects-display":', () => {
    expect(screen.getByTestId('projects-display')).toBeInTheDocument();
  });

  test('7 - Has at least one project:', () => {
    expect(screen.getByTestId('projects-display').children).toHaveLength(1);
  });
});
