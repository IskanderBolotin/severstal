import { useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "components/productTable";
import DateInput from "src/components/dateInput";
import EditButton from "components/editButton";
import StatusBlock from "components/statusBlock";
import TableTd from "components/table/components/tableTd";
import TableTr from "components/table/components/tableTr";
import { OrderType } from "types/order";
import cn from "classnames";
import ArrowButton from "src/components/arrowButton";
import s from "./orderTableRow.module.scss";

type OrderTableRowProps = {
  data: OrderType;
  tdClassName?: string;
}

const OrderTableRow: React.FC<OrderTableRowProps> = ({ data, tdClassName }) => {
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { products, displayedProps } = data;
  

  const toggleHandler = () => {
    setIsProductOpen((v) => !v)
  }
  const editHandler = () => {
    setIsEditing(true);
  }
  const saveHandler = () => {
    setIsEditing(false);
  }
  const cancelHandler = () => {
    setIsEditing(false);
  }

  return (
    <>
      <TableTr>
        <>
          <TableTd className={tdClassName}>
            <ArrowButton isActive={isProductOpen} handler={toggleHandler}/>
          </TableTd>
          {
            displayedProps.map(([key, value]) => {
              const isStatusCell = key === "status_id";
              const isExpireDateCell = key === "expire_date";
              const isOrderId = key === "order_id";

              let content = value;

              if (isOrderId) {
                content = (
                  <Link to={`/orders/${value}/info`} className={s.link}>
                    { value }
                  </Link>
                )
              }
              if (isExpireDateCell) {
                content = isEditing ? <DateInput value={value} /> : value
              }
              if (isStatusCell) {
                content = <StatusBlock status_id={value}/>
              }

              return (
                <TableTd key={key} className={cn(isStatusCell && s.statusCell, tdClassName)}>
                  {
                    content
                  }
                </TableTd>
              )
            })
          }
          <TableTd className={cn(s.editCell, tdClassName)}>
            <EditButton isEditing={isEditing} editHandler={editHandler} saveHandler={saveHandler} cancelHandler={cancelHandler}/>
          </TableTd>
        </>
      </TableTr>
      {
        isProductOpen &&
        <TableTr>
          <>
            <TableTd></TableTd>
            <TableTd className={s.productTh} colSpan={9}>
              <ProductTable product_articles={products}/>
            </TableTd>
          </>
        </TableTr>
      }
    </>
  )
}
export default OrderTableRow;