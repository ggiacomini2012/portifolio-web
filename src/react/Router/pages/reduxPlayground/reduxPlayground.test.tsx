import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import globalString from '../../../global/constants/strings/globalStrings';
import App from '../../../../App';

describe('ReduxPlayground tests:', () => {
  window.history.pushState({}, '', '/redux-playground');

  beforeEach(() => {
    render(<App />);
  });

  test('learning tests', () => {
    expect(screen.getByText(globalString.english.intro)).toBeInTheDocument();
  });
});
