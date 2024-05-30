import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import s from "./detail.module.scss";

const linksData = [
  {
    title: "Информация",
    href: "info"
  },
  {
    title: "История",
    href: "history"
  }
];

const Detail: React.FC = () => {
  const { order_id = "" } = useParams();
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h1 className={s.title}>Детали заказа {order_id}</h1>
        <div className={s.top}>
          <ul className={s.list}>
            {
              linksData.map((link) => {
                const {title, href} = link;
                return (
                  <li className={s.item} key={href}>
                    <NavLink to={`/orders/${order_id}/${href}`} className={({isActive}) => cn(s.link, isActive && s.active)}>
                      {
                        title
                      }
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Detail;