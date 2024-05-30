import { useContext } from "react";
import { OrderContext } from "src/context/ordersContext";
import { isDefinedString } from "src/functions/isDefined";
import { getStatusNameById } from "src/functions/status";
import s from "./statusBlock.module.scss";

type StatusBlockProps = {
  status_id: number;
}
const StatusBlock: React.FC<StatusBlockProps> = ({ status_id }) => {
  const { context } = useContext(OrderContext);
  const status_name = getStatusNameById(context.order_statuses, status_id);
  if (isDefinedString(status_name)) {
    return (
      <span className={s.status}>{status_name}</span>
    )
  }
  return (
    <></>
  )
}

export default StatusBlock;