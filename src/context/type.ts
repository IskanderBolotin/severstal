import { OrderModel, ProductModel, OrderStatudModel } from "src/models";
import { SortingByType } from "types/sorting";

export type ContextState = {
  orders: OrderModel[];
  products: ProductModel[];
  order_statuses: OrderStatudModel[];
}

export type ContextModel = {
  context: ContextState;
  immutable: ContextState;
  createOrder?: (order: OrderModel) => void;
  setOrderStatus?: (id: number, status_id: number) => void;
  setOrderDate?: (id: number, value: string) => void;
  filerOrders?: (value: string) => void;
  sortOrdersByDate?: (type: SortingByType) => void;
  sortOrdersByStatus?: (type: SortingByType) => void;
}