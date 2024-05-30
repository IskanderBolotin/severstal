import SearchForm from "src/components/searchForm";
import OrderTable from "components/orderTable";
import s from "./orders.module.scss";

const Orders: React.FC = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1 className={s.title}>Заказы</h1>
        <div className={s.search}>
          <SearchForm />
        </div>
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;
