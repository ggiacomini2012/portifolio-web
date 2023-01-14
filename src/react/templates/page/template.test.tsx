import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Template from './Template';

describe('Template tests:', () => {
  test('learning tests', () => {
    render(<Template />);
    expect(screen.getByText('Hello I am in the document')).toBeInTheDocument();
  });
});
