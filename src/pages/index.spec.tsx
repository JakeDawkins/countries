import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import HomePage from './index.page';

import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));

describe('HomePage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('renders without error', () => {
    render(<HomePage />);
    expect(screen.getByText('Countries')).toBeVisible();
  });
});
