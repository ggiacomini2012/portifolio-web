import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('Header tests:', () => {
  window.history.pushState({}, '', '/');

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has a header tag type "HEADER" with data-testid="header":', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header').tagName).eq('HEADER');
  });

  test('2 - Has a header tag type "BUTTON" with data-testid="home-button":', () => {
    expect(screen.getByTestId('home-button')).toBeInTheDocument();
    expect(screen.getByTestId('home-button').tagName).eq('BUTTON');
  });

  test('3 - Has a header tag type "BUTTON" with data-testid="about-button":', () => {
    expect(screen.getByTestId('about-button')).toBeInTheDocument();
    expect(screen.getByTestId('about-button').tagName).eq('BUTTON');
  });

  test('4 - Has a header tag type "BUTTON" with data-testid="contact-button":', () => {
    expect(screen.getByTestId('contact-button')).toBeInTheDocument();
    expect(screen.getByTestId('contact-button').tagName).eq('BUTTON');
  });

  test('5 - Has a header tag with data-testid="select-language-button":', () => {
    expect(screen.getByTestId('select-language-button')).toBeInTheDocument();
  });

  test('6 - Has a header tag type "BUTTON" with data-testid="button-moon-sun":', () => {
    expect(screen.getByTestId('button-moon-sun')).toBeInTheDocument();
    expect(screen.getByTestId('button-moon-sun').tagName).eq('BUTTON');
  });
});
