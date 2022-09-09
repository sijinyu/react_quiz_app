import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index';

describe('<Header />', () => {
  it('shows children', () => {
    render(<Header>test</Header>);
    expect(screen.getByText('test')).toBeInTheDocument()
    
  });
});
