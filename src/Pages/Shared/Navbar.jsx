import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logoutHandel = () => {
    logOut();
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavOption = (
    <>
      <Link
        to="/"
        className="font-medium text-white hover:text-gray-400 sm:py-6  dark:hover:text-white"
        href="#"
      >
        Home
      </Link>
      <Link
        to="/contact_us"
        className="font-medium text-white hover:text-gray-400 sm:py-6  dark:hover:text-white"
      >
        Contact Us
      </Link>
      <Link
        to="/dashboard"
        className="font-medium text-white hover:text-gray-400 sm:py-6  dark:hover:text-white"
      >
        Dashboard
      </Link>
      <Link
        to="/our_menu"
        className="font-medium text-white hover:text-gray-400 sm:py-6  dark:hover:text-white"
      >
        Our Menu
      </Link>
      <Link
        to="/our_shop/salad"
        className="font-medium text-white hover:text-gray-400 sm:py-6  dark:hover:text-white"
        href="#"
      >
        Our Shop
      </Link>
      {!user ? (
        <Link
          to="/login"
          className="flex items-center gap-x-2 font-medium text-white hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6   dark:hover:text-blue-500"
          href="#"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Log in
        </Link>
      ) : (
        <button onClick={toggleMenu}>
          <img
            className=" w-8 h-8 flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            src="https://i.ibb.co/Rg5S6tq/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt="user photo"
          />
        </button>
      )}
    </>
  );

  return (
    <header className="fixed transition delay-[0.6s]  bg-opacity-50 text-white flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-0 bg-gray-800 dark:border-gray-700">
      <nav
        className="relative text-white max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-white text-xl font-semibold dark:text-white"
            to="/"
            aria-label="Logo"
          >
            FoodExchange
          </Link>
          <div className="sm:hidden">
            {/* responsive Button */}
            <button
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex text-white  flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            {NavOption}
            {user && isOpen && (
              <div className="absolute border border-custom-yellow top-12 right-8 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-custom-naveBlue">
                <div className="px-4 py-3  text-sm text-gray-900">
                  <div className="uppercase  font-poppins">
                    {user?.displayName}
                  </div>
                  <div className="font-medium truncate">{user?.email}</div>
                </div>
                {/* <div className="divider border border-custom-yellow py-0 my-0"></div> */}
                <hr className=" border-custom-yellow border-t-2 w-full" />
                <ul
                  className="py-2 text-sm text-gray-700 a"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>

                  <Link
                    to="/earnings"
                    className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>

                  <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={logoutHandel}>Sign out</button>
                  </li>
                </ul>
                <div className="py-2"></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
