import { useState } from "react";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { Stack, Heading } from "@chakra-ui/react";

import ActivityItem from "./ActivityItem";
import ActivityControls from "./ActivityControls";
import Onboarding from "../Onboarding/Onboarding";
import { Activity, Area } from "../../types";

const GET_ACTIVITIES_SUB = gql`
  subscription getActivities {
    activities {
      id
      template {
        id
        title
        interval
      }
      area {
        id
        title
      }
    }
  }
`;

type ActivitiesByArea = {
  area: Area;
  activities: Activity[];
};

const groupByArea = (activities: Activity[]): Map<string, ActivitiesByArea> => {
  return activities.reduce((grouped, activity) => {
    if (!grouped.has(activity.area.id)) {
      grouped.set(activity.area.id, {
        area: activity.area,
        activities: [],
      });
    }
    grouped.get(activity.area.id).activities.push(activity);
    return grouped;
  }, new Map());
};

type Props = {
  activities: Activity[];
};

export function ActivityList({ activities }: Props) {
  const [isGrouped, setIsGrouped] = useState(false);

  const renderList = () => {
    if (isGrouped) {
      const grouped = groupByArea(activities);
      return [...grouped.values()].map((group) => (
        <Stack spacing="2" key={group.area.id}>
          <Heading as="h2">{group.area.title}</Heading>
          {group.activities.map((activity) => (
            <ActivityItem activity={activity} key={activity.id} />
          ))}
        </Stack>
      ));
    } else {
      return activities.map((activity) => (
        <ActivityItem activity={activity} key={activity.id} />
      ));
    }
  };

  return (
    <Stack spacing="2">
      <ActivityControls onChangeGrouped={(value) => setIsGrouped(value)} />
      {renderList()}
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

  return <ActivityList activities={data.activities} />;
}
