import { useMemo } from "react";
import { Box, Tag } from "@chakra-ui/react";
import { interval } from "iso8601-interval";

import { Activity } from "../../types";

type Props = {
  activity: Activity;
};
export default function ActivityItem({ activity }: Props) {
  const intervalLabel = useMemo(() => {
    const months = interval(activity.template.interval).period.getFullMonths();

    if (months === 0) {
      throw `Invalid format: ${activity.template.interval}`;
    }

    if (months > 12) {
      const years = Math.floor(months / 12);
      return years > 1 ? `every ${years} years` : `every year`;
    } else {
      return months > 1 ? `every ${months} months` : `every month`;
    }
  }, [activity]);

  return (
    <Box>
      {activity.template.title}
      &nbsp;
      <Tag size="sm" variantColor="teal">
        {intervalLabel}
      </Tag>
    </Box>
  );
}
