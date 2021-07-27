import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Router><App /></Router>, div);
});

it('renders navlinks', () => {
    render(<Router><App /></Router>);
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });