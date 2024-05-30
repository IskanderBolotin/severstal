import React, { useContext, useMemo } from "react";
import { OrderContext } from "src/context/ordersContext";
import Table from "components/table";
import TableTr from "components/table/components/tableTr";
import TableTh from "components/table/components/tableTh";
import ProductTableRow from "./components/productTableRow";
import { getProductsByArticles, mapProductDataToBodyProps, mapProductDataToTableHeaderProps } from "src/functions/products";
import s from "./productTable.module.scss";

type ProductTableProps = {
  product_articles?: number[]
}

const ProductTable: React.FC<ProductTableProps> = ({ product_articles = [] }) => {
  const { context } = useContext(OrderContext);
  const dataHeaderCell = useMemo(() => mapProductDataToTableHeaderProps(context.products), [context.products]) ;
  const currentProducts = useMemo(() => getProductsByArticles(context.products, product_articles), [context.products, product_articles]);
  const dataBodyRows = useMemo(() => mapProductDataToBodyProps(currentProducts), [context.products, product_articles]);

  return (
    <Table>
      <>
        <thead>
          <TableTr>
            <>
              {
                dataHeaderCell.map(([propety_name, value]) => {
                  return (
                    <TableTh key={propety_name} className={s.th}>
                      {
                        value
                      }
                    </TableTh>
                  )
                })
              }
            </>
          </TableTr>
        </thead>
        <tbody>
          {
            dataBodyRows.map((rowItem) => {
              return (
                <ProductTableRow data={rowItem} key={rowItem.id} tdClassName={s.td}/>
              )
            })
          }
        </tbody>
      </>
    </Table>
  )
}

export default ProductTable;