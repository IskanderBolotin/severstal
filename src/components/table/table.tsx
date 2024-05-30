import { ComponentProps } from "react";
import s from "./table.module.scss";

type TableOwnProps = {
  className?: string;
}

type TableProps = TableOwnProps & Omit<ComponentProps<"table">, keyof TableOwnProps>;

const Table: React.FC<React.PropsWithChildren<TableProps>> = ({ children, className, ...otherProps}) => {
  return (
    <table className={s.table} {...otherProps}>
      {
        children
      }
    </table>
  )
}
export default Table;