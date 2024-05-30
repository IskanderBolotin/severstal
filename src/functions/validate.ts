import { OrderStatudModel } from "src/models";
import { isDefinedString } from "./isDefined";

export const validateStatus = (data: OrderStatudModel[], status_id: number) => {
  return data.some((status) => status.id === status_id);
}
export const validateSting = (value: string) => {
  return isDefinedString(value);
}