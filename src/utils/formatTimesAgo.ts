// utils/formatTimeAgo.js
import { formatDistanceToNow } from "date-fns";

export function formatTimeAgo(timestamp: string) {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
}
