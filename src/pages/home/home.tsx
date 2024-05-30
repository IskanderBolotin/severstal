import OrderTable from "components/orderTable";
import SearchForm from "src/components/searchForm";
import s from "./home.module.scss";


function Home() {
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
}

export default Home;
