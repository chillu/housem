import { Box } from "@chakra-ui/react";

import { Activity } from "../../types";

type Props = {
  activity: Activity;
};
export default function ActivityItem({ activity }: Props) {
  return <Box>{activity.template.title}</Box>;
}
