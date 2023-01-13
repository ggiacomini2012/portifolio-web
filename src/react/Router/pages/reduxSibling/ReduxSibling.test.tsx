import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ReduxSibling from './ReduxSibling';
import globalString from '../../../global/constants/strings/globalStrings';

describe('ReduxSibling tests:', () => {
  test('learning tests', () => {
    render(<ReduxSibling />);
    expect(screen.getByText(globalString.developerName)).toBeInTheDocument();
  });
});
