import { differenceInDays, format } from "date-fns";

export function formatBlogDate(dateString: string) {
  const date = new Date(dateString);
  const daysDiff = differenceInDays(new Date(), date);

  if (daysDiff < 7) {
    if (daysDiff === 0) return "Today";
    if (daysDiff === 1) return "Yesterday";
    return `${daysDiff} days ago`;
  }

  return format(date, "dd MMMM yyyy");
}
