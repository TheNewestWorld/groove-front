import { format } from "date-fns";

export const formatFullDate = (date: Date | number) => {
  return format(date, "yyyy. M. d");
};
