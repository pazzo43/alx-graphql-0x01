# alx-graphql-0x01
## Create the Project
npx create-next-app@latest alx-rick-and-morty-app --typescript --eslint --tailwind

### Move Into the Project
cd alx-rick-and-morty-app

#### Install Required Dependencies
npm install @apollo/client graphql
npm install @types/graphql

##### Create the GraphQL Directory
In the root of the project, create:
/graphql

Inside it, create two empty files:
/graphql/apolloClient.ts
/graphql/queries.ts

##### Add Apollo Client Configuration
Open:
graphql/apolloClient.ts

Replace content with exactly:
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache: new InMemoryCache()
});

export default client;

##### Add the GET_EPISODES Query
Open the file:
graphql/queries.ts

Replace content with:
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

##### Update _app.tsx
Open:
pages/_app.tsx

Replace the content with:
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

##### Start the Development Server
npm run dev

Open your browser and visit:
http://localhost:3000


