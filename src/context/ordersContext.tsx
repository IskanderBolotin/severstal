import { createContext, useEffect, useState } from "react";
import { SortingByType } from "src/types/sorting";
import { ContextModel, ContextState } from "./type";
import { getOrdersData } from "src/services/orders";
import { sortByDate, sortByStatus } from "src/functions/sorting";
import { createOrderToOrders, filterOrderByOrderIdOrCustomerName, setOrderExpireDate, setOrderStatusId } from "src/functions/order";
import { OrderModel } from "src/models";

const initialState = {
  orders: [],
  products: [],
  order_statuses: []
}

export const OrderContext = createContext<ContextModel>({
  context: initialState,
  immutable: initialState,
  createOrder: () => {},
  setOrderStatus: () => {},
  setOrderDate: () => {},
  filerOrders: () => {},
  sortOrdersByDate: () => {},
  sortOrdersByStatus: () => {},
});

const OrderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [contextData, setContextData] = useState<ContextState>(initialState);
  const [immutableData, setImmutableData] = useState<ContextState>(initialState);

  const createOrder = (order: OrderModel) => {
    setContextData(
      {
        ...contextData,
        orders: createOrderToOrders(contextData.orders, order),
      }
    );
    setImmutableData(
      {
        ...contextData,
        orders: createOrderToOrders(immutableData.orders, order),
      }
    );
  }
  
  const setOrderStatus = (id: number, status_id: number) => {
    setContextData(
      {
        ...contextData,
        orders: setOrderStatusId(contextData.orders, id, status_id),
      }
    );
    setImmutableData(
      {
        ...contextData,
        orders: setOrderStatusId(immutableData.orders, id, status_id),
      }
    );
  };

  const setOrderDate = (id: number, value: string) => {
    setContextData(
      {
        ...contextData,
        orders: setOrderExpireDate(contextData.orders, id, value),
      }
    );
    setImmutableData(
      {
        ...contextData,
        orders: setOrderExpireDate(immutableData.orders, id, value),
      }
    );
  };

  const filerOrders = (value: string) => {
    setContextData(
      {
        ...contextData,
        orders: filterOrderByOrderIdOrCustomerName(immutableData.orders, value),
      }
    );
  };

  const sortOrdersByDate = (type: SortingByType) => {
    setContextData(
      {
        ...contextData,
        orders: sortByDate(contextData.orders, type),
      }
    );
    setImmutableData(
      {
        ...contextData,
        orders: sortByDate(immutableData.orders, type),
      }
    );
  };

  const sortOrdersByStatus = (type: SortingByType) => {
    setContextData(
      {
        ...contextData,
        orders: sortByStatus(contextData.orders, type),
      }
    );
    setImmutableData(
      {
        ...contextData,
        orders: sortByStatus(immutableData.orders, type),
      }
    );
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getOrdersData() as ContextState;
      setContextData(data);
      setImmutableData(data)
    }
   loadData();
  }, []);

  return (
    <OrderContext.Provider value={{ context: contextData, immutable: immutableData, createOrder, setOrderStatus, setOrderDate, filerOrders, sortOrdersByDate, sortOrdersByStatus }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider;