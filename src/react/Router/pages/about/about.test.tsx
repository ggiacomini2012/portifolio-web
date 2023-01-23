import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../App';

describe('About tests:', () => {
  window.history.pushState({}, '', '/about');

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('...Work in Progress...', () => {
    expect(screen.getByText('Hello I am the about page!')).toBeInTheDocument();
  });
});
