import dayjs from "dayjs";

export const formatDate = (dateString) => {
  return dayjs(dateString).format("DD/MM/YYYY HH:mm");
};

export const formatToDayMonthYear = (dateString) => {
  return dayjs(dateString).format("DD/MM/YYYY");
};
