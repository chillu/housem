import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { Stack } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";
import Onboarding from "../Onboarding/Onboarding";
import { Activity } from "../../types";

const GET_ACTIVITIES_SUB = gql`
  subscription getActivities {
    activities {
      id
      template {
        id
        title
      }
      area {
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
  const { loading, error, data } = useSubscription(GET_ACTIVITIES_SUB);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  if (!data.activities.length) {
    return <Onboarding />;
  }

  return <ActivityList items={data.activities} />;
}
