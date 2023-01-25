import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';
import { CountriesListQuery } from '../__generated__/graphql';
import Link from 'next/link';
import { groupCountriesByStartingLetter } from '../utils/groupCountriesByStartingLetter';
import { CountryTile } from '../components';

export const COUNTRIES_LIST_QUERY = gql`
  query CountriesList {
    countries {
      name
      code
      emoji
    }
  }
`;

function CountryList() {
  const { loading, data, error } =
    useQuery<CountriesListQuery>(COUNTRIES_LIST_QUERY);
  const countries = data?.countries;
  const grouped = useMemo(
    () => groupCountriesByStartingLetter(countries),
    [countries, groupCountriesByStartingLetter],
  );

  if (loading) return <p>Loading...</p>;
  if (error || !data?.countries) return <p>Error</p>;

  return (
    <div className="pb-8">
      <h1 className="text-4xl font-bold">Countries</h1>
      <div className="mt-8 mb-8">
        {Object.keys(grouped)
          .sort()
          .map((key) => {
            return (
              <div key={`letter-group-${key}`} className="mt-8">
                <h2 className="text-2xl">{key}</h2>
                <div className="flex flex-row flex-wrap">
                  {grouped[key].map(({ code, name, emoji }) => {
                    return (
                      <CountryTile
                        key={code}
                        name={name}
                        code={code}
                        emoji={emoji}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CountryList;
