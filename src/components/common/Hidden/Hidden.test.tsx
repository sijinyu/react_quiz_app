import React from 'react'
import { render, screen } from '@testing-library/react'
import Hidden from './index';

describe('<Hidden />', () => {
  it('shows children , use props True', () => {
    render(<Hidden use>test</Hidden>);
    expect(screen.getByText('test')).not.toBeVisible()
    
  });

  it('shows children , use props False', () => {
    render(<Hidden use={false}>test</Hidden>);
    expect(screen.getByText('test')).toBeVisible()
    
  });
});
