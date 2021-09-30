import ActivityItem from "./ActivityItem";
import { Activity } from "../../types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ACTIVITIES_QUERY = gql`
  query getActivities {
    activities {
      id
      title
    }
  }
`;

type Props = {
  items: Activity[];
};

export function ActivityList({ items }: Props) {
  return (
    <div>
      {items.map((item) => (
        <ActivityItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default function ActivityListQuery() {
  const { loading, error, data } = useQuery(GET_ACTIVITIES_QUERY);
  console.log(error);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return <ActivityList items={data.activities} />;
}
