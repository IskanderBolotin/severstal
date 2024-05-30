export type StatusType = "Собирается" | "Готов к выдаче" | "Выдан" | "Отменён";

export type OrderStatudModel = {
  id: number;
  name: StatusType;
};
