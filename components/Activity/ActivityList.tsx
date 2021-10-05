import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Stack } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";
import { Activity } from "../../types";

const GET_ACTIVITIES_QUERY = gql`
  query getActivities {
    activities {
      id
      template {
        id
        title
      }
    }
  }
`;

type Props = {
  items: Activity[];
};

export function ActivityList({ items }: Props) {
  return (
    <Stack spacing="2">
      {items.map((item) => (
        <ActivityItem item={item} key={item.id} />
      ))}
    </Stack>
  );
}

export default function ActivityListQuery() {
  const { loading, error, data } = useQuery(GET_ACTIVITIES_QUERY);
  console.log(error);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return <ActivityList items={data.activities} />;
}
