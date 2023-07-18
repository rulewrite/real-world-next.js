import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { useApollo } from '../../lib/apollo';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialAplloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
