import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const isSsr = typeof window === 'undefined';
let uri = '/api/graphql';
let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: isSsr,
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
};

export const initApollo = (
  initialState: NormalizedCacheObject | null = null
) => {
  const client = apolloClient || createApolloClient();

  if (initialState) {
    client.cache.restore({
      ...client.extract(),
      ...initialState,
    });
  }

  if (isSsr) {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
};
