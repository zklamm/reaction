import moment from "moment";

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
  return moment(date_str).format("MMM D");
};

export const longFormatDate = (date_str) => {
  let result = moment(date_str).format("MMM D \\at h:mm A");

  if (dueClass(date_str).startsWith("overdue")) {
    result += " (past due)";
  }

  return result;
};
