import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GraphQLError } from 'graphql';
import ListPage, { COUNTRIES_LIST_QUERY } from './list.page';

import mockRouter from 'next-router-mock';
import { mockCountryList } from '../utils/mockData';
jest.mock('next/router', () => require('next-router-mock'));

describe('ListPage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/list');
  });

  it('renders with loading indicator', () => {
    const mocks = [];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('renders with data after loading', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRIES_LIST_QUERY,
        },
        result: {
          data: {
            countries: mockCountryList.countries,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(await screen.findByText(`My Country 👋`)).toBeVisible();
  });

  it('renders network error message', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRIES_LIST_QUERY,
        },
        error: new Error('a fake network error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(await screen.findByText('Error')).toBeVisible();
  });

  it('renders graphql error message', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRIES_LIST_QUERY,
        },
        result: {
          errors: [new GraphQLError('Error!')],
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ListPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(await screen.findByText('Error')).toBeVisible();
  });
});
