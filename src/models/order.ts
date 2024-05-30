export type OrderModel = {
  id: number;
  order_id: string;
  quantity: number;
  order_date: string;
  expire_date: string;
  status_id: number;
  customer_name: string;
  phone_number: string;
  total_cost: number;
  products: number[];
};
