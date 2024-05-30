import { useContext } from "react";
import { useParams } from "react-router";
import { OrderContext } from "src/context/ordersContext";
import { Progress } from 'antd';
import { getOrderByOrderId } from "src/functions/order";
import { getStatusInfo, getStatusNameById } from "src/functions/status";
import s from "./history.module.scss";


const History: React.FC = () => {
  const { context } = useContext(OrderContext);
  const { order_id = "" } = useParams();
  const currentOrder = getOrderByOrderId(context.orders, order_id);
  const [percent, progress] = getStatusInfo(currentOrder.status_id);
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        Заказ: {getStatusNameById(context.order_statuses, currentOrder.status_id)}
      </h2>
      <Progress percent={percent} status={progress}/>
    </div>
  )
}
export default History;