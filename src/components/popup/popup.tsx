import { createPortal } from 'react-dom';
import { Input } from 'antd';
import s from "./popup.module.scss";

const modalRelative = document.getElementById("modal");

type Props = {
  closeHandler: () => void;
}
const formInput = [
  {
    label: "Номер заказа",
    name: "order_id"
  },
  {
    label: "Дата оформления",
    name: "order_date"
  },
  {
    label: "Хранение до",
    name: "expire_date"
  },
  {
    label: "Статус заказа",
    name: "status_id"
  },
  {
    label: "ФИО клиента",
    name: "customer_name"
  },
  {
    label: "Номер телефона",
    name: "phone_number"
  },
  {
    label: "Стоимость",
    name: "total_cost"
  }
]
const Popup: React.FC<Props> = ({ closeHandler }) => {
  return createPortal(
  <div className={s.wrapper}>
    <div className={s.inner}>
      <div className={s.popup}>
        <div className={s.close}>
          <button className={s.btnClose} onClick={closeHandler}>X</button>
        </div>
        <h3 className={s.title}>Добавить заказ</h3>
        <form autoComplete="off">
          {
            formInput.map((input) => {
              const {label, name} = input;
              return (
                <div className={s.group} key={name}>
                  <label className={s.lable} htmlFor="">{label}</label>
                  <Input id={name} name={name} />
                </div>
              )
            })
          }
        </form>
      </div>
    </div>
  </div>,
  modalRelative!)
}

export default Popup;