import { useContext } from "react";
import { useParams } from "react-router";
import { OrderContext } from "src/context/ordersContext";
import ProductTable from "src/components/productTable";
import { getOrderByOrderId, mapOrderDataToDetailProps } from "src/functions/order";
import { getStatusNameById } from "src/functions/status";
import s from "./order.module.scss";

const Order: React.FC = () => {
  const { context } = useContext(OrderContext);
  const { order_id = "" } = useParams();
  const currentOrder = getOrderByOrderId(context.orders, order_id);
  const mappedOrder = mapOrderDataToDetailProps(currentOrder);

  return (
    <>
      <ul>
        {
          mappedOrder.map(([key, title, value]) => {
            const isStatus = key === "status_id";
            const isProducts = key === "products";
            return (
              <li className={s.item} key={key}>
                {
                  isStatus ?
                  <>
                    <span className={s.name}>{title}: </span> <span>{getStatusNameById(context.order_statuses, value)}</span>
                  </> :
                  isProducts ? 
                  <>
                    <span className={s.name}>{title}: </span>
                    <div className={s.table}>
                      <ProductTable product_articles={value}/>
                    </div>
                  </> :
                  <>
                    <span className={s.name}>{title}: </span> <span>{value}</span>
                  </>
                }
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Order;