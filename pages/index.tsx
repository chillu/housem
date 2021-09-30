import Header from "../components/Header";
import Login from "../components/Auth/Login";
import ActivityList from "../components/Activity/ActivityList";

import { withApollo } from "../lib/withApollo";
import { useFetchUser } from "../lib/user";

const IndexPage = () => {
  const { user, loading } = useFetchUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!loading && !user) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      <ActivityList />
    </div>
  );
};

export default withApollo()(IndexPage);
