import { useCallback, useEffect, useState } from 'react';

import styles from '../styles/home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <h1>Countries</h1>
      <p>
        This app is meant as a resource for finding information about various
        countries, like currency, language spoken, and continent.
      </p>
    </main>
  );
}

export default Home;
