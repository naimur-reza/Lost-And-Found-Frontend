import { format, parse } from "date-fns";

// Function to convert 24-hour time string to 12-hour format
const convertTo12HourFormat = (time24: string) => {
  // Parse the time string using date-fns
  const [hours, minutes] = time24?.split(":");
  const date = new Date();
  date.setHours(parseInt(hours, 10), parseInt(minutes, 10));

  // Format the time to 12-hour format
  return format(date, "hh:mm a");
};

export default convertTo12HourFormat;
