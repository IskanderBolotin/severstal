import { Routes, Route } from "react-router-dom";
import OrderContextProvider from "src/context/ordersContext";
import DesktopLayout from "src/layouts/desktopLayout/desktopLayout";
import Home from "src/pages/home/home";
import Orders from "src/pages/orders";
import Products from "src/pages/products";
import PageNotFound from "src/pages/pageNotFound";
import Detail from "src/pages/detail";
import Order from "src/pages/order";
import History from "src/pages/history";

const App: React.FC = () => {
  const LayoutComponent = DesktopLayout;

  return (
    <OrderContextProvider>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="orders"> 
            <Route index element={<Orders />} /> 
            <Route path=":order_id" element={<Detail />}>
              <Route path="info" element={<Order />} />
              <Route path="history" element={<History /> } />
            </Route>
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </OrderContextProvider>
  );
};
export default App;
