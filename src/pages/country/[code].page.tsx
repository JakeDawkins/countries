import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { CountryInfo, Icon } from '../../components';
import {
  CountryQuery,
  Country,
  CountryInfoFragment,
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
  if (error || !data?.country) return <p>Error</p>;

  // TODO -- fix fragment typing
  const country = data.country as CountryInfoFragment;

  return (
    <>
      <Link href="/list" className=" justify-start items-center flex flex-row">
        <Icon name="arrow-left" size={18} />
        <p className="underline ml-2">Back to List</p>
      </Link>
      <h1 className="text-4xl font-bold mb-8 mt-8">
        {country.name || 'Not Found'}
        {country.emoji ? `  ${country.emoji}` : undefined}
      </h1>
      <CountryInfo country={country} />
    </>
  );
}

export default CountryDetail;
