import { Container } from "@chakra-ui/react";
import { withApollo } from "../lib/withApollo";
import { useFetchUser } from "../lib/user";

import Header from "../components/Header";
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
      <Container>
        <Landing />
      </Container>
    );
  }
  return (
    <Container>
      <Header />
      <ActivityList />
    </Container>
  );
};

export default withApollo()(IndexPage);
