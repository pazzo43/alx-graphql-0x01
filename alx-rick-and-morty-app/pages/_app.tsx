npx create-next-app@latest alx-rick-and-morty-app --typescript --eslint --tailwind

cd alx-rick-and-morty-app

npm install @apollo/client graphql
npm install @types/graphql

/graphql

/graphql/apolloClient.ts
/graphql/queries.ts

graphql/apolloClient.ts

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache: new InMemoryCache()
});

export default client;


graphql/queries.ts

import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;


pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

npm run dev

http://localhost:3000

