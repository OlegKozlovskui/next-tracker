import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <Layout>
      <strong>{data.sayHello}</strong>
    </Layout>
  );
};

export default withApollo(Home);
