import { OrderModel, ProductModel, OrderStatudModel } from "src/models";

export type ContextState = {
  orders: OrderModel[];
  products: ProductModel[];
  order_statuses: OrderStatudModel[];
}

export type ContextModel = {
  context: ContextState;
  immutable: ContextState;
  setValue?: (value: ContextState) => void;
}