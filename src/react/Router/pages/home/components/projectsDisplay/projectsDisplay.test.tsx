import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../../../../../../App';
import globalString from '../../../../../global/constants/strings/globalStrings';

describe.skip('ProjectDisplay tests:', () => {
  window.history.pushState({}, '', '/');

  afterEach(cleanup);

  beforeEach(() => {
    render(<App />);
  });

  test('...Work in Progress...', () => {
    expect(screen.getAllByText(new RegExp(globalString.developerName, 'i'))[0]).toBeInTheDocument();
  });
});
