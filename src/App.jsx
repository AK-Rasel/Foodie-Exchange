import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

const App = () => {
  const location = useLocation();

  const isNav = location.pathname.includes("/login");
  const isFooter = location.pathname.includes("/register");
  return (
    <div>
      {isNav || isFooter || <Navbar />}
      <Outlet />
      {isNav || isFooter || <Footer />}
    </div>
  );
};

export default App;
