import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('Router tests:', async () => {
  const renderPath = (path: string) => {
    window.history.pushState({}, '', path);
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  };

  test('1 - Render "Home Component" at path "/":', () => {
    renderPath('/');
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('2 - Render "About Component" at path "/about":', () => {
    renderPath('/about');
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  test('3 - Render "Contact Component" at path "/contact":', () => {
    renderPath('/contact');
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  test('4 - Render "Not Found" at path "/random-query":', () => {
    renderPath('/not-found');
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
