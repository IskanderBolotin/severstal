import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderContext } from "src/context/ordersContext";
import { Input } from "antd";
import s from "./searchForm.module.scss";
import { isDefinedString } from "src/functions/isDefined";

const SearchForm: React.FC = () => {
  const { immutable, filerOrders } = useContext(OrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("find") || "";
  const [inputState, setInputState] = useState(query);
  
  useEffect(() => {
    if (!!filerOrders && isDefinedString(query)) {
      filerOrders(query)
    }
  }, [immutable.orders])

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
              setSearchParams({ find: value });
            }}
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
