import { ComponentProps } from "react";
import cn from 'classnames';
import s from "./tableTd.module.scss";

type TdOwnProps = {
  className?: string;
}

type TdProps = TdOwnProps & Omit<ComponentProps<"td">, keyof TdOwnProps>;

const TableTd: React.FC<React.PropsWithChildren<TdProps>> = ({ children, className, ...otherProps}) => {
  return (
    <td className={cn(s.td, className)} {...otherProps}>
      {
        children
      }
    </td>
  )
}
export default TableTd;