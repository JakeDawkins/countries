import '../globals.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
