import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";

const App = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
