import ActivityItem from "./ActivityItem";
import { Activity } from "../../types";

type Props = {
  items: Activity[];
};
export default function ActivityList({ items }: Props) {
  return (
    <div>
      {items.map((item) => (
        <ActivityItem item={item} key={item.id} />
      ))}
    </div>
  );
}
