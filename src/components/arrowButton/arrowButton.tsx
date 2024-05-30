import cn from "classnames";
import IconDown from "assets/icons/icon-down.svg?react";
import s from "./arrowButton.module.scss";

type ArrowButtonProps = {
  isActive?: boolean;
  handler: () => void
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ isActive = false, handler }) => {
  return (
    <button className={cn(s.toggle, isActive && s.active)} onClick={handler}>
      <span className={s.toggleInner}>
        <IconDown />
      </span>
    </button>
  )
}

export default ArrowButton;