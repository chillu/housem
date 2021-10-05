import { Container, SimpleGrid } from "@chakra-ui/react";
import { withApollo } from "../lib/withApollo";
import { useFetchUser } from "../lib/user";

import Header from "../components/Header";
import Layout from "../components/Layout";
import ActivityList from "../components/Activity/ActivityList";
import Landing from "../components/Landing/Landing";

const IndexPage = () => {
  const { user, loading } = useFetchUser();
  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO Server-render this outside of authenticated state
  if (!loading && !user) {
    return (
      <Layout>
        <Header isLoggedIn={false} />
        <Landing />
      </Layout>
    );
  }
  return (
    <Layout>
      <Header isLoggedIn={true} />
      <ActivityList />
    </Layout>
  );
};

export default withApollo()(IndexPage);
