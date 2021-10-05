import { Box } from "@chakra-ui/react";

import { Activity } from "../../types";

type Props = {
  item: Activity;
};
export default function ActivityItem({ item }: Props) {
  return <Box>{item.template.title}</Box>;
}
