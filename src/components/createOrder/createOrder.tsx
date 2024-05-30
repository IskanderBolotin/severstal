import { useState } from "react";
import Popup from "components/popup";
import IconCreate from "assets/icons/icon-create.svg?react";
import s from "./createOrder.module.scss";

const CreateOrder: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closeHandler = () => {
    setIsPopupOpen(false);
  };
  const buttonHandler = () => {
    setIsPopupOpen(true);
  };
  return (
    <>
      <button className={s.button} onClick={buttonHandler}>
        <span className={s.buttonInner}>
          <IconCreate />
        </span>
      </button>
      {isPopupOpen && <Popup closeHandler={closeHandler} />}
    </>
  );
};

export default CreateOrder;
