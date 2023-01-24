import React from 'react';
import { useRouter } from 'next/router';
import { CountryInfo, Layout } from '../../components';
import { gql, useQuery } from '@apollo/client';
import { CountryQuery } from '../../__generated__/graphql';

const COUNTRY_QUERY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      phone
      continent {
        name
      }
      capital
      emoji
    }
  }
`;

function CountryDetail() {
  const router = useRouter();
  const code =
    typeof router?.query?.code === 'string' ? router?.query?.code : undefined;

  const { loading, data, error } = useQuery<CountryQuery>(COUNTRY_QUERY, {
    variables: {
      code: code?.toUpperCase(),
    },
    skip: !code,
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error || !data?.country) return <p>Error</p>;

  const country = data.country;

  return (
    <Layout>
      <h1 className="text-4xl font-bold">
        {country.name || 'Not Found'}
        {country.emoji ? `  ${country.emoji}` : undefined}
      </h1>

      <CountryInfo country={country} />

      {/* TODO - failure */}
      <p>Country Code: {code}</p>
    </Layout>
  );
}

export default CountryDetail;