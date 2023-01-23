import React from 'react';
import { Layout } from '../components';

function Home() {
  return (
    <Layout>
      <h1 className="underline text-3xl font-bold">Countries</h1>
      <p>
        This app is meant as a resource for finding information about various
        countries, like currency, language spoken, and continent.
      </p>
    </Layout>
  );
}

export default Home;
