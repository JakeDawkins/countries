import Link from 'next/link';
import React from 'react';
import { CountryInfo } from '../components';

function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Countries</h1>
      <p className="mt-8">
        This app is meant as a resource for finding information about various
        countries, like currency, language spoken, and continent.
      </p>
      <p className="mt-4">
        Clicking on a country on the{' '}
        <Link href="/list" className="underline font-bold">
          List
        </Link>{' '}
        page will open details about that country.
      </p>
    </>
  );
}

export default Home;
