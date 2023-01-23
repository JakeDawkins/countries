import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import { gql, useQuery } from '@apollo/client';

const COUNTRY_QUERY = gql`
  query CountryQuery($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;

function CountryDetail() {
  const router = useRouter();
  const code = router?.query?.code;

  const { loading, data, error } = useQuery(COUNTRY_QUERY, {
    variables: {
      code: code?.toUpperCase(),
    },
    skip: !code,
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Layout>
      <h1 className="underline text-3xl font-bold">
        {data?.country?.name || 'Not Found'}
      </h1>

      {/* TODO - failure */}
      <p>Country Code: {code}</p>
    </Layout>
  );
}

export default CountryDetail;
