import TableTr from "components/table/components/tableTr";
import TableTd from "components/table/components/tableTd";
import { ProductType } from "src/types/product";

type ProductTableRowProps = {
  data: ProductType;
  tdClassName?: string
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({ data, tdClassName }) => {
  const { displayedProps } = data;

  return (
    <TableTr>
      <>
        {
          displayedProps.map(([key, value]) => {
            return (
              <TableTd key={key} className={tdClassName}>
                {
                  value
                }
              </TableTd>
            )
          })
        }
      </>
    </TableTr>
  )
}

export default ProductTableRow;