import { Outlet } from "react-router-dom";
import Header from "src/components/header";
import Footer from "src/components/footer";
import s from "./desktopLayout.module.scss";

const DesktopLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default DesktopLayout;
