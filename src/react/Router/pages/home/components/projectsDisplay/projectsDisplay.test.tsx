import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../../../../App';

describe('ProjectDisplay tests:', () => {
  window.history.pushState({}, '', '/');

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  test('1 - Has a TAG section that embrace a image and two buttons with data-testid="project-display-container-1":', () => {
    expect(screen.getByTestId('project-display-container-1')).toBeInTheDocument();
    expect(screen.getByTestId('project-display-container-1').tagName).eq('SECTION');
  });

  test('2 - Section has three children:', () => {
    expect(screen.getByTestId('project-display-container-1').children).toHaveLength(4);
  });
});
