import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Country } from '../../__generated__/graphql';

interface CountryInfoProps {
  country: Country;
}

function CountryInfo({ country }) {
  return <p>{JSON.stringify(country)}</p>;
}

export default CountryInfo;
