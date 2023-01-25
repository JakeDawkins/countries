import React, { useCallback, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { CountriesListQuery } from '../__generated__/graphql';
import Link from 'next/link';
import { CountryLink, Icon } from '../components';

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
  const [query, setQuery] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const countries = data?.countries;
    if (!countries) return;
    if (!query?.length) setFilteredCountries(countries);
    setFilteredCountries(
      countries.filter(({ name }) =>
        name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [data, query]);

  const onInputChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error || !data?.countries) return <p>Error</p>;

  const countries = data.countries;

  return (
    <>
      <h1 className="text-4xl font-bold">Search</h1>
      <input
        type="text"
        onChange={onInputChange}
        className="border border-gray-500 w-64 p-2 rounded-md mt-8"
        placeholder="Search"
      />
      <hr className="mt-8" />
      {filteredCountries.map((country) => {
        return (
          <CountryLink
            name={country.name}
            emoji={country.emoji}
            code={country.code}
          />
        );
      })}
    </>
  );
}

export default Search;
