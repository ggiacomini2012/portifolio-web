import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Template from './Template';
import globalString from '../../../global/constants/strings/globalStrings';

describe('Template tests:', () => {
  test('learning tests', () => {
    render(<Template />);
    expect(screen.getByText(globalString.developerName)).toBeInTheDocument();
  });
});
