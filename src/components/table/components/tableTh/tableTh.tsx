import { ComponentProps } from "react";
import cn from 'classnames';
import s from "./tableTh.module.scss";

type ThOwnProps = {
  className?: string;
}

type ThProps = ThOwnProps & Omit<ComponentProps<"th">, keyof ThOwnProps>;

const TableTh: React.FC<React.PropsWithChildren<ThProps>> = ({ children, className, ...otherProps}) => {
  return (
    <th className={cn(s.th, className)} {...otherProps}>
      {
        children
      }
    </th>
  )
}
export default TableTh