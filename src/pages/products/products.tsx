import ProductTable from "src/components/productTable";
import s from "./products.module.scss";

const Products: React.FC = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <ProductTable />
      </div>
    </div>
  );
};

export default Products;
