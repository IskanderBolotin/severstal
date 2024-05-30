import { OrderModel } from "models/order";
import { SortingByType, SortingPropertyType } from "types/sorting";

export const sortByDate = (
  data: OrderModel[],
  sortingBy: SortingByType = "ASC",
  sortingProperty: SortingPropertyType = "order_date",
) => {
  return [...data].sort((a, b) => {
    const prevDate = new Date(a[sortingProperty]).getTime();
    const nextDate = new Date(b[sortingProperty]).getTime();
    if (sortingBy === "ASC") {
      return prevDate - nextDate;
    }
    else {
      return nextDate - prevDate;
    }
  });
};

export const sortByStatus = (
  data: OrderModel[],
  sortingBy: SortingByType = "ASC",
) => {
  return [...data].sort((a, b) => {
    if (sortingBy === "ASC") {
      return a.status_id - b.status_id;
    }
    else {
      return b.status_id - a.status_id;
    }
  });
};