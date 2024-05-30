import { OrderStatudModel } from "models/status";

export const getStatusNameById = (data: OrderStatudModel[], id: number) => {
  return data.find((status) => status.id === id)?.name || "";
}
export const getStatusInfo = (status: number): [number, any] => {
  switch (status) {
    case 1: return [33, "active"];
    case 2: return [66, "active"];
    case 3: return [100, "success"];
    case 4: return [10, "exception"];
    default: return [10, "normal"];
  }
}