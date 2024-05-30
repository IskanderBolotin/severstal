import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderContext } from "src/context/ordersContext";
import { Input } from "antd";
import s from "./searchForm.module.scss";

const SearchForm: React.FC = () => {
  const { context, setValue } = useContext(OrderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [inputState, setInputState] = useState(query);

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
              if (!!setValue) {
                setValue(
                  {
                    ...context,
                    orders: [...context.orders].filter((order) => order.customer_name.toLowerCase().includes(value.toLowerCase()))
                  }
                )
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
