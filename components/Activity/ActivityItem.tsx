import { Activity } from "../../types";

type Props = {
  item: Activity;
};
export default function ActivityItem({ item }: Props) {
  return <span>{item.title}</span>;
}
