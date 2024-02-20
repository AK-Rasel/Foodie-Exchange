import { Link, NavLink } from "react-router-dom";

const DrawerNavLink = () => {
  const isAdmin = true;
  // const isAdmin = false;
  return (
    <>
      <div>
        <Link to="/" className="text-3xl mb-5 font-bold">
          FoodExchange
        </Link>
      </div>
      {/* horizontal line */}
      <hr className="w-full border border-white  my-4" />
      {isAdmin ? (
        // admin
        <>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="admin_home"
          >
            Admin Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="add_item"
          >
            Add Items
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="manage_items"
          >
            Manage Items
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="manage_booking"
          >
            Manage bookings{" "}
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="all_user"
          >
            All Users{" "}
          </NavLink>
        </>
      ) : (
        <>
          {/* user */}{" "}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="user_home"
          >
            User Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="reservation"
          >
            Reservation
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="payment_history"
          >
            Payment History
          </NavLink>
          <NavLink
            // className={({ isActive }) => {
            //   isActive ? "text-custom-yellow" : "text-custom-yellow";
            // }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="cart"
          >
            My Cart
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="reviews"
          >
            Add Review
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#F5AB35] underline link link-hover"
                : ""
            }
            to="booking"
          >
            My Booking
          </NavLink>
        </>
      )}

      {/* horizontal line */}
      <hr className="w-full border border-white  my-4" />

      <Link to="/">Home</Link>

      <Link to="/our_menu">Our Menu</Link>

      <Link to="/our_shop/salad">Our Shop</Link>

      <Link to="/contact_us">Contact Us</Link>
    </>
  );
};

export default DrawerNavLink;
