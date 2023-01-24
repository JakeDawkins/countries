import Link from 'next/link';
import React from 'react';
import { CountryInfo, Layout } from '../components';

function Home() {
  return (
    <Layout>
      <h1 className="underline text-3xl font-bold">Countries</h1>
      <p className="mt-4">
        This app is meant as a resource for finding information about various
        countries, like currency, language spoken, and continent.
      </p>
      <p className="mt-4">
        Clicking on a country on the <Link href="/list">List</Link> page will
        open details about that country. Each country has an info tile like
        this:
      </p>
    </Layout>
  );
}

export default Home;
