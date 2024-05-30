import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "src/context/ordersContext";
import ProductTable from "components/productTable";
import DateInput from "components/dateInput";
import EditButton from "components/editButton";
import StatusBlock from "components/statusBlock";
import SelectStatus from "components/selectStatus";
import ArrowButton from "components/arrowButton";
import TableTd from "components/table/components/tableTd";
import TableTr from "components/table/components/tableTr";
import { OrderType } from "types/order";
import cn from "classnames";
import s from "./orderTableRow.module.scss";
import { validateStatus, validateSting } from "src/functions/validate";

type OrderTableRowProps = {
  data: OrderType;
  tdClassName?: string;
}

const OrderTableRow: React.FC<OrderTableRowProps> = ({ data, tdClassName }) => {
  const { context, setOrderStatus, setOrderDate } = useContext(OrderContext);
  const { id, products, displayedProps } = data;
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [expireDateState, setExpireDateState] = useState<string>(displayedProps.find(item => item[0] === "expire_date")?.[1]);
  const [statusIdState, setStatusIdState] = useState<number>(displayedProps.find(item => item[0] === "status_id")?.[1]);
  const [validateObj, setValidateObj] = useState({ date: true, status: true });

  const validateHandler = () => {
    if (!validateSting(expireDateState)) {
      setValidateObj(
        (v) => {
          return {...v, date: false}
        }
      )
      return false;
    }
    if (!validateStatus(context.order_statuses, statusIdState)) {
      setValidateObj(
        (v) => {
          return {...v, status: false}
        }
      )
      return false;
    }
    setValidateObj({ date: true, status: true })
    return true;
  };

  const toggleHandler = () => {
    setIsProductOpen((v) => !v)
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = () => {
    const valid = validateHandler()
    if (!valid) {
      return;
    }
    setIsEditing(false);
    if (!!setOrderDate) {
      setOrderDate(id, expireDateState)
    }
    if (!!setOrderStatus) {
      setOrderStatus(id, statusIdState)
    }
  };

  const cancelHandler = () => {
    setValidateObj({ date: true, status: true })
    setIsEditing(false);
  };

  const dateInputHandler = (value: string) => {
    setExpireDateState(value)
  };

  const selectHandler = (status_id: number) => {
    setStatusIdState(status_id)
  }

  return (
    <>
      <TableTr>
        <>
          <TableTd className={cn(s.td, tdClassName)}>
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
                content = isEditing ? <DateInput isError={!validateObj.date} value={value} inputHandler={dateInputHandler} /> : value
              }

              if (isStatusCell) {
                content = isEditing ? <SelectStatus status_id={value} selectHandler={selectHandler} isError={!validateObj.status} /> : <StatusBlock status_id={value} />
              }

              return (
                <TableTd key={key} className={cn(s.td, isStatusCell && s.statusCell, tdClassName)}>
                  {
                    content
                  }
                </TableTd>
              )
            })
          }
          <TableTd className={cn(s.td, s.editCell, tdClassName)}>
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