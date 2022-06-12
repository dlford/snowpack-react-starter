import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Counter from './Counter';

describe('Counter component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Counter />);
    expect(getByText(/page has been open for/i)).toBeInTheDocument();
  });
});
