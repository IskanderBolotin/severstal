import { ComponentProps } from "react";
import s from "./table.module.scss";

type TableOwnProps = {
  className?: string;
}

type TableProps = TableOwnProps & Omit<ComponentProps<"table">, keyof TableOwnProps>;

const Table: React.FC<React.PropsWithChildren<TableProps>> = ({ children, className, ...otherProps}) => {
  return (
    <div className={s.wrapper}>
      <table className={s.table} {...otherProps}>
        {
          children
        }
      </table>
    </div>
  )
}
export default Table;