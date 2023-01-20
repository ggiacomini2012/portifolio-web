import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ReduxPlayground from './ReduxPlayground';
import globalString from '../../../global/constants/strings/globalStrings';

describe('ReduxPlayground tests:', () => {
  test('learning tests', () => {
    render(<ReduxPlayground />);
    expect(screen.getByText(globalString.english.intro)).toBeInTheDocument();
  });
});
