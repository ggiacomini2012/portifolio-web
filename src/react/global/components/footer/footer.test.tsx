import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('Footer tests:', () => {
  window.history.pushState({}, '', '/');

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has a Footer tag type "Footer" with data-testid="footer":', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer').tagName).eq('FOOTER');
  });

  test('2 - Has a Footer tag type "A" with data-testid="footer-link":', () => {
    expect(screen.getByTestId('footer-link')).toBeInTheDocument();
    expect(screen.getByTestId('footer-link').tagName).eq('A');
  });

  test('3 - Tag type "A" has text:"" data-testid="footer-link":', () => {
    expect(screen.getByText(/© 2023 by Guilherme Giacomini Teixeira/i)).toBeInTheDocument();
  });

  test('4 - Has a Footer tag type "IMG" with data-testid="footer-image":', () => {
    expect(screen.getByTestId('footer-image')).toBeInTheDocument();
    expect(screen.getByTestId('footer-image').tagName).eq('IMG');
  });
});
