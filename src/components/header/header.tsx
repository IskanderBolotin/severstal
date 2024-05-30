import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import ReactLogo from "src/assets/react.svg?react";
import s from "./header.module.scss";

const navListData = [
  {
    key: "orders",
    text: "Заказы",
    href: "/orders",
  },
  {
    key: "products",
    text: "Товары",
    href: "/products",
  },
];

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.row}>
          <div className={s.item}>
            <Link className={s.logo} to="/">
              <ReactLogo />
            </Link>
          </div>
          <div className={s.item}>
            <nav>
              <ul className={s.list}>
                {navListData.map((item) => {
                  const { text, href, key } = item;
                  return (
                    <li className={s.listItem} key={key}>
                      <NavLink className={({isActive}) => cn(s.link, isActive && s.active)} to={href}>
                        {text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
