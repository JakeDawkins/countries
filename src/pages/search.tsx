import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import { CountriesListQuery } from '../__generated__/graphql';
import Link from 'next/link';

const COUNTRIES_LIST_QUERY = gql`
  query CountriesList {
    countries {
      name
      code
      emoji
    }
  }
`;

function Search() {
  const { loading, data, error } =
    useQuery<CountriesListQuery>(COUNTRIES_LIST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error || !data?.countries) return <p>Error</p>;

  const countries = data.countries;

  return (
    <Layout>
      <h1 className="text-4xl font-bold">Search</h1>
      {countries.map((country) => {
        return (
          <Link key={country.code} href={`/country/${country.code}`}>
            <p className="mt-2">
              {country.name} {country.emoji}
            </p>
          </Link>
        );
      })}
    </Layout>
  );
}

export default Search;
