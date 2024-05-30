import { useContext, useState } from "react";
import { OrderContext } from "src/context/ordersContext";
import { sortByDate, sortByStatus } from "src/functions/sorting";
import { SortingByType } from "src/types/sorting";
import cn from "classnames";
import IconDown from "assets/icons/icon-down.svg?react";
import s from "./sortForm.module.scss";

type SortFormProps = {
  propery: string;
};

const SortForm: React.FC<SortFormProps> = ({ propery }) => {
  const {context, setValue} = useContext(OrderContext);
  const [sortType, setSortType] = useState<SortingByType>("DESC");
  const isASC = sortType === "ASC";

  const changeSort = () => {
    if (isASC) {
      setSortType("DESC")
    }
    else {
      setSortType("ASC")
    }
  }

  const sortHandler = () => {
    if (propery === "order_date") {
      const sortData = sortByDate(context.orders, sortType);
      changeSort();
      if (!!setValue) {
        setValue(
          {
            ...context,
            orders: sortData
          }
        )
      }
    }
    if (propery === "status_id") {
      const sortData = sortByStatus(context.orders, sortType);
      changeSort();
      if (!!setValue) {
        setValue(
          {
            ...context,
            orders: sortData
          }
        )
      }
    }
  }

  return (
    <button className={cn(s.btn, isASC && s.asc)} onClick={sortHandler}>
      <IconDown />
    </button>
  )
}

export default SortForm;