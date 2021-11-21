import React from 'react';
import { render, screen } from '@testing-library/react';
import { GiphySearchAPI } from './GiphySearchAPI';

test('renders learn react link', () => {
  render(<GiphySearchAPI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
