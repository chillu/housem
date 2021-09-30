import Header from "../components/Header";
import Login from "../components/Auth/Login";
import ActivityList from "../components/Activity/ActivityList";

import { withApollo } from "../lib/withApollo";
import { useFetchUser } from "../lib/user";

const items = [
  { id: "1", title: "foo" },
  { id: "2", title: "bar" },
];

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
      <ActivityList items={items} />
    </div>
  );
};

export default withApollo()(IndexPage);
