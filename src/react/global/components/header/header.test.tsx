import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('Header tests:', () => {
  window.history.pushState({}, '', '/');

  afterEach(cleanup);

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

  test('7 - Should translate buttons when select with data-testid="select-language-button" changes:', () => {
    expect(screen.getByTestId('home-button')).toHaveTextContent('home');
    expect(screen.getByTestId('about-button')).toHaveTextContent('about');
    expect(screen.getByTestId('contact-button')).toHaveTextContent('contact');
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'português' } });
    expect(screen.getByTestId('home-button')).toHaveTextContent('início');
    expect(screen.getByTestId('about-button')).toHaveTextContent('sobre');
    expect(screen.getByTestId('contact-button')).toHaveTextContent('contacto');
    // #REFACTOR test is leaking...
    fireEvent.change(screen.getByTestId('select-language-button'), { target: { value: 'english' } });
  });

  test('8 - Should change class when button with data-testid="button-moon-sun" is clicked:', () => {
    expect(screen.getByTestId('header')).toHaveClass('header-dark');
    fireEvent.click(screen.getByTestId('button-moon-sun'));
    expect(screen.getByTestId('header')).toHaveClass('header-light');
  });

  test('9 - Should navigate to about page when button with data-testid="about-button" is clicked and go back when data-testid="home-button" is clicked:', () => {
    expect(screen.getByTestId('home')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('about-button'));
    expect(screen.getByTestId('about')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('home-button'));
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('10 - Should navigate to contact page when button with data-testid="contact-button" is clicked and go back when data-testid="home-button" is clicked:', () => {
    expect(screen.getByTestId('home')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('contact-button'));
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('home-button'));
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
