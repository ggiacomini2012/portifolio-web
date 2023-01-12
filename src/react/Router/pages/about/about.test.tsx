import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import About from './About';
import globalString from '../../../global/constants/strings/globalStrings';

describe('About tests:', () => {
  test('learning tests', () => {
    render(<About />);
    expect(screen.getByText(globalString.developerName)).toBeInTheDocument();
    expect(2).toBe(3);
  });
});
