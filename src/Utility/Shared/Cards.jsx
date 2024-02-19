import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosProtect from "../../Hooks/useAxiosProtect";
import useCarts from "../../Hooks/useCarts";

// import image from "../../assets/home/Rectangle 5.jpg";

const Cards = ({ items }) => {
  const [, refetch] = useCarts();
  const { name, recipe, image, price, _id, category } = items;
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const axiosProtected = useAxiosProtect();
  const addCartHandle = () => {
    // console.log(user?.email, food);
    const cartItems = {
      name,
      image,
      price,
      menuId: _id,
      email: user?.email,
      category,
    };

    // console.log("cartItem ====>", cartItems);
    if (user) {
      // toodo
      axiosProtected.post("/cart", cartItems).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Success fully add cart ${name}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Login Please",
        text: "Login now to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#D99904",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // naviget
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="group: w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      {/* img */}
      <img className="rounded-t-lg " src={image} alt="product image" />
      <p className="text-white bg-black p-4 w-16 absolute top-4 right-4 z-10  rounded-lg font-poppins">
        {"$" + price}
      </p>
      {/* content */}
      <div className="px-5 pb-6 mt-4 space-y-6">
        <a href="#" className="space-y-4">
          <h4 className="text-3xl text-center  font-bold tracking-tight  text-gray-900 dark:text-white">
            {name}
          </h4>
          {/* <p className="text-white">{category}</p> */}

          <h5 className="text-xl text-center tracking-tight text-gray-900 dark:text-white">
            {recipe}
          </h5>
        </a>

        <div className="flex items-center justify-center">
          {/* <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span> */}
          <button
            onClick={addCartHandle}
            className="text-white bg-custom-yellow focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
