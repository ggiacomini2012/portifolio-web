import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../../../../App';

describe('About tests:', () => {
  window.history.pushState({}, '', '/about');

  beforeEach(() => {
    render(<App />);
  });

  test('learning tests', () => {
    expect(screen.getByText('Hello I am the about page!')).toBeInTheDocument();
  });
});
