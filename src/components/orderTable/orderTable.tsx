import React, { useContext, useMemo } from "react";
import { OrderContext } from "src/context/ordersContext";
import Table from "components/table";
import SortForm from "components/sortForm";
import TableTr from "components/table/components/tableTr";
import TableTh from "components/table/components/tableTh";
import OrderTableRow from "components/orderTable/components/orderTableRow";
import { mapOrderDataToBodyProps, mapOrderDataToTableHeaderProps } from "src/functions/order";
import s from "./orderTable.module.scss";


const OrderTable: React.FC = () => {
  const { context } = useContext(OrderContext);
  const dataHeaderCell = useMemo(() => mapOrderDataToTableHeaderProps(context.orders), [context.orders]) ;
  const dataBodyRows = useMemo(() => mapOrderDataToBodyProps(context.orders), [context.orders]);

  return (
    <Table>
      <>
        <thead>
          <TableTr className={s.tableHeader}>
            <>
              <TableTh />
              {
                dataHeaderCell.map(([propety_name, value]) => {

                  const isOrderDate = propety_name === "order_date";
                  const isStatusId = propety_name === "status_id";
                  
                  return (
                    <TableTh key={propety_name} className={s.th}>
                      <div className={s.thInner}>
                        { value }
                        {
                          (isOrderDate || isStatusId) && <div className={s.sort}><SortForm propery={propety_name} /></div>
                        }
                      </div>
                    </TableTh>
                  )
                })
              }
              <TableTh>
                <button>
                  add
                </button>
              </TableTh>
            </>
          </TableTr>
        </thead>
        <tbody>
          {
            dataBodyRows.map((rowItem) => {
              return (
                <OrderTableRow data={rowItem} key={rowItem.id} tdClassName={s.td} />
              )
            })
          }
        </tbody>
      </>
    </Table>
  )
}
export default OrderTable;