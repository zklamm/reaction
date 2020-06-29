import moment from "moment";

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dueClass = (dueDate, completed) => {
  const diff = moment(dueDate).diff(new Date(), "days");

  if (completed) {
    return "completed";
  } else if (diff < -1) {
    return "overdue";
  } else if (diff < 0) {
    return "overdue-recent";
  } else if (diff < 1) {
    return "due-soon";
  } else {
    return "due-later";
  }
};

export const formatDate = (date_str) => {
  const date = new Date(date_str);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};
