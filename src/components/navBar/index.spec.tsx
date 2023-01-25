import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '.';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavBar', () => {
  it('renders expanded', () => {
    render(<NavBar />);
    screen.getByText('Home');
    screen.getByTestId('toggle-nav');
  });

  it('toggles closed when toggle button clicked', () => {
    render(<NavBar />);
    const button = screen.getByTestId('toggle-nav');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    // this text changes when expanded
    screen.getByLabelText('click to expand nav');
    // this is the class that sets the NavItem width, controlled by the
    // collapsed state
    expect(screen.getAllByTestId('nav-item-wrapper-div')[0]).toHaveClass('w-9');
  });

  it('toggles open when closed and toggle button clicked', () => {
    render(<NavBar />);
    const button = screen.getByTestId('toggle-nav');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    // this text changes when expanded
    screen.getByLabelText('click to expand nav');

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    // this text changes when collapsed
    screen.getByLabelText('click to collapse nav');

    // this is the class that sets the NavItem width, controlled by the
    // collapsed state
    expect(screen.getAllByTestId('nav-item-wrapper-div')[0]).not.toHaveClass(
      'w-9',
    );
  });

  it.todo('simulate initial render on small screen');
});
