import { format } from "date-fns";

export const formatFullDate = (date: Date | number) => {
  return format(date, "yyyy년 M월 d일 HH:mm");
};
