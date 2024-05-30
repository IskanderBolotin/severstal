import { ComponentProps } from "react";
import cn from 'classnames';
import s from "./tableTr.module.scss";

type TrOwnProps = {
  className?: string;
}

type TrProps = TrOwnProps & Omit<ComponentProps<"tr">, keyof TrOwnProps>;

const TableTr: React.FC<React.PropsWithChildren<TrProps>> = ({ children, className, ...otherProps}) => {
  return (
    <tr className={cn(s.tr, className)} {...otherProps}>
      {
        children
      }
    </tr>
  )
}
export default TableTr;