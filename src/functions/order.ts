import { OrderModel } from "models/order";
import { isDefinedArray, isDefinedObject } from "functions/isDefined";
import { OrderType } from "types/order";

const TitleOrderDictionary: Record<string, string> = {
  id: "ID",
  order_id: "Номер заказа",
  quantity: "Количество товаров в заказе",
  order_date: "Дата оформления",
  expire_date: "Хранение до",
  status_id: "Статус заказа",
  customer_name: "ФИО клиента",
  phone_number: "Номер телефона",
  total_cost: "Стоимость",
  products: "Список товаров",
};

export const notDisplayedOrderProperies = ["id", "products"];
export const notDisplayedOrderDetailProperies = ["id", "quantity"];

export const mapOrderDataToBodyProps = (data: OrderModel[]): OrderType[] => {
  if (!isDefinedArray(data)) {
    return [];
  }
  return data.map((order) => {
    const {id, products, ...otherProps} = order;
    return {
      id: id,
      products: products,
      displayedProps: Object.entries(otherProps)
    };
  });
};

export const mapOrderDataToTableHeaderProps = (data: OrderModel[]): [string, string][] => {
  if (!isDefinedArray(data)) {
    return [];
  }
  return Object.entries(data[0]).reduce<[string, string][]>((acc, [key, _]) => {
    if (notDisplayedOrderProperies.includes(key)) {
      return acc;
    }
    return [
      ...acc,
      [
        key, 
        TitleOrderDictionary[key]
      ]
    ]
  }, []);
};

export const mapOrderDataToDetailProps = (data: OrderModel): [string, string, any][] => {
  if (!isDefinedObject(data)) {
    return [];
  }
  return Object.entries(data).reduce<[string, string, any][]>((acc, [key, value]) => {
    if (notDisplayedOrderDetailProperies.includes(key)) {
      return acc;
    }
    return [
      ...acc,
      [
        key,
        TitleOrderDictionary[key],
        value, 
      ]
    ]
  }, []);
};

export const getOrderByOrderId = (data: OrderModel[], order_id: string): OrderModel => {
  return data.find((order) => order.order_id === order_id) || {} as OrderModel;
};

export const filterOrderByOrderIdOrCustomerName = (data: OrderModel[], value: string): OrderModel[] => {
  const currentValue = value.toLowerCase();
  return [...data].filter((order) => order.customer_name.toLowerCase().includes(currentValue) || order.order_id.toLowerCase().includes(currentValue))
};

export const setOrderExpireDate = (data: OrderModel[], id: number, value: string): OrderModel[] => {
  return [...data].map((order) => {
    if (order.id === id) {
      order.expire_date = value;
    }
    return order;
  })
};


export const setOrderStatusId = (data: OrderModel[], id: number, status_id: number): OrderModel[] => {
  return [...data].map((order) => {
    if (order.id === id) {
      order.status_id = status_id;
    }
    return order;
  })
};

export const createOrderToOrders = (data: OrderModel[], order: OrderModel) => {
  return [...data, order];
}