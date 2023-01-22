import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../../../App';
import globalString from '../../global/constants/strings/globalStrings';

describe.skip('Template tests:', () => {
  window.history.pushState({}, '', '/');

  beforeEach(() => {
    render(<App />);
  });

  test('learning tests', () => {
    expect(screen.getAllByText(new RegExp(globalString.developerName, 'i'))[0]).toBeInTheDocument();
  });
});
