import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';

function CountryDetail() {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="underline text-3xl font-bold">Country Name</h1>

      {/* TODO - failure */}
      <p>Country Code: {router.query.code}</p>
    </Layout>
  );
}

export default CountryDetail;
