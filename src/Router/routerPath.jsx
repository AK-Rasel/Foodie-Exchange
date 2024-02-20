import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Review from "../Pages/Dashboard/Review/Review";
import Reservation from "../Pages/Reservation/Reservation";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Booking from "../Pages/Dashboard/Booking/Booking";
import AdminHome from "../Pages/Dashboard/Admin/Home/AdminHome";
import AddItem from "../Pages/Dashboard/Admin/Add Item/AddItem";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
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
        element: (
          <PrivateRouter>
            <ContactUs />
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // user
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "reviews",
        element: <Review />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "user_home",
        element: <UserHome />,
      },
      {
        path: "payment_history",
        element: <PaymentHistory />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      // Addmin
      {
        path: "admin_home",
        element: <AdminHome />,
      },
      {
        path: "add_item",
        element: <AddItem />,
      },
      {
        path: "manage_items",
        element: <ManageItems />,
      },
      {
        path: "manage_booking",
        element: <ManageBookings />,
      },
      {
        path: "all_user",
        element: <AllUsers />,
      },
    ],
  },
]);
export default routerPath;
