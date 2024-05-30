import { useContext, useState } from "react";
import { OrderContext } from "src/context/ordersContext";
import { SortingByType } from "src/types/sorting";
import cn from "classnames";
import IconDown from "assets/icons/icon-down.svg?react";
import s from "./sortForm.module.scss";

type SortFormProps = {
  propery: string;
};

const SortForm: React.FC<SortFormProps> = ({ propery }) => {
  const {sortOrdersByDate, sortOrdersByStatus} = useContext(OrderContext);
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
      changeSort();
      if (!!sortOrdersByDate) {
        sortOrdersByDate(sortType)
      }
    }
    if (propery === "status_id") {
      changeSort();
      if (!!sortOrdersByStatus) {
        sortOrdersByStatus(sortType)
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