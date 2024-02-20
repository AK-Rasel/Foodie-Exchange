import { HiMenuAlt2 } from "react-icons/hi";
import DrawerNavLink from "./Shared/DrawerNavLink";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse lg:flex-col  py-5 px-4">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="  drawer-button lg:hidden">
          <HiMenuAlt2 className="text-2xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu text-start justify-start items-start p-4 w-80 min-h-full bg-custom-naveBlueLow text-white font-semibold text-lg">
          {/* Sidebar content here */}
          <DrawerNavLink />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
