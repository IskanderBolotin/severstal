import { createContext, useEffect, useState } from "react";
import { getOrdersData } from "src/services/orders";
import { ContextModel, ContextState } from "./type";

const initialState = {
  orders: [],
  products: [],
  order_statuses: []
}

export const OrderContext = createContext<ContextModel>({
  immutable: initialState,
  context: initialState,
  setValue: (value) => value
});

const OrderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [contextData, setContextData] = useState<ContextState>(initialState);
  const [immutableData, setImmutableData] = useState<ContextState>(initialState);

  useEffect(() => {
    const loadData = async () => {
      const data = await getOrdersData();
      setContextData(data);
      setImmutableData(data);
    }
   loadData();
  }, []);

  return (
    <OrderContext.Provider value={{ context: contextData, immutable: immutableData, setValue: setContextData}}>
      {children}
    </OrderContext.Provider>
  )
}
export default OrderContextProvider;