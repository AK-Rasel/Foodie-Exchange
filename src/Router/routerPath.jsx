import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our_menu",
        element: <OurMenu />,
      },
      {
        path: "our_shop/:category",
        element: <OurShop />,
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
    ],
  },
]);
export default routerPath;
