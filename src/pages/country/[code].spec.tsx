import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CountryDetailPage, { COUNTRY_QUERY } from './[code]';
import { GraphQLError } from 'graphql';

import mockRouter from 'next-router-mock';
import { mockCountryInfo } from '../../utils/mockData';
jest.mock('next/router', () => require('next-router-mock'));

describe('CountryDetailPage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/country/US');
    mockRouter.query.code = 'US';
  });

  afterEach(() => {
    mockRouter.query.code = undefined;
  });

  it('renders with loading indicator', () => {
    const mocks = [];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryDetailPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('renders with data after loading', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRY_QUERY,
          variables: {
            code: 'US',
          },
        },
        result: {
          data: {
            country: mockCountryInfo,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryDetailPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(
      await screen.findByText(mockCountryInfo.continent.name),
    ).toBeVisible();
  });

  it('renders network error message', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRY_QUERY,
          variables: {
            code: 'US',
          },
        },
        error: new Error('a fake network error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryDetailPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(await screen.findByText('Error')).toBeVisible();
  });

  it('renders graphql error message', async () => {
    const mocks = [
      {
        request: {
          query: COUNTRY_QUERY,
          variables: {
            code: 'US',
          },
        },
        result: {
          errors: [new GraphQLError('Error!')],
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryDetailPage />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeVisible();
    expect(await screen.findByText('Error')).toBeVisible();
  });
});
