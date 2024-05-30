import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderContext } from "src/context/ordersContext";
import { Input } from "antd";
import s from "./searchForm.module.scss";

const SearchForm: React.FC = () => {
  const { filerOrders } = useContext(OrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [inputState, setInputState] = useState(query);
  
  useEffect(() => {
    if (!!filerOrders) {
      filerOrders(query)
    }
  }, [])

  return (
    <>
      <form className={s.form} autoComplete="off">
        <div className={s.wrapper}>
          <Input.Search
            className={s.input}
            placeholder="Поиск"
            enterButton="Search"
            size="large"
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            onSearch={(value: string, e: any) => {
              e.preventDefault();
              if (!!filerOrders) {
                filerOrders(value)
              }
              setSearchParams({ search: value });
            }}
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
