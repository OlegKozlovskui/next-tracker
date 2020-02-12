import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(['Do the dishes']);

  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <Layout>
      <div className="hero">
        <div className="title">Level Up Your Life</div>
        <div className="list">
          <HabitForm setHabits={setHabits} />
          <HabitList habits={habits} />
        </div>
      </div>
      <strong>{data.sayHello}</strong>
    </Layout>
  );
};

export default withApollo(Home);
