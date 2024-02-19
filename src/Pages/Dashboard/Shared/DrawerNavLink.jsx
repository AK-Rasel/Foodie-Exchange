import { Link } from "react-router-dom";

const DrawerNavLink = () => {
  return (
    <>
      <div>
        <Link to="/" className="text-3xl mb-5 font-bold">
          FoodExchange
        </Link>
      </div>
      {/* horizontal line */}
      <hr className="w-full border border-white  my-4" />
      <li>
        <Link to="/user_home">User Home</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>
      <li>
        <Link to="/payment_history">Payment History</Link>
      </li>
      <li>
        <Link to="cart">My Cart</Link>
      </li>
      <li>
        <Link to="reviews">Add Review</Link>
      </li>
      <li>
        <Link to="/booking">My Booking</Link>
      </li>
      {/* horizontal line */}
      <hr className="w-full border border-white  my-4" />
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our_menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/our_shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/contact_us">Contact Us</Link>
      </li>
    </>
  );
};

export default DrawerNavLink;
