import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { CountryInfo, Icon, IconTile } from '../../components';
import {
  type CountryQuery,
  type CountryInfoFragment,
} from '../../__generated__/graphql';

export const COUNTRY_QUERY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      ...CountryInfo
    }
  }

  fragment CountryInfo on Country {
    __typename
    name
    native
    phone
    continent {
      name
    }
    capital
    emoji
    languages {
      name
    }
    currency
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

  if (loading) return <p>Loading...</p>;
  if ((error != null) || ((data?.country) == null)) return <p>Error</p>;

  // TODO -- fix fragment typing
  const country = data.country as CountryInfoFragment;

  return (
    <>
      <button
        // this doesn't work well when users navigate directly to the page
        // it uses the browser's history, and navigates back, no matter
        // where they come from
        onClick={() => { router.back(); }}
        className=" justify-start items-center flex flex-row"
      >
        <Icon name="arrow-left" size={18} />
        <p className="underline ml-2">Go Back</p>
      </button>
      <h1 className="text-4xl font-bold mb-8 mt-8">
        {country.name || 'Not Found'}
        {country.emoji ? `  ${country.emoji}` : undefined}
      </h1>
      <CountryInfo country={country} />
      <hr className="mt-8 mb-4" />
      <IconTile
        title="Note"
        message="This data is fetched from a source that may contain incorrect information, especially around languages"
        color="#eab208"
        icon="info"
      />
    </>
  );
}

export default CountryDetail;
