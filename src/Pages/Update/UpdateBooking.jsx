import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import { useEffect, useState } from "react";
import useAxiosProtect from "../../Hooks/useAxiosProtect";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import toast from "react-hot-toast";

const image_kay = import.meta.env.VITE_image_Host;
const image_api = `https://api.imgbb.com/1/upload?key=${image_kay}`;

const UpdateBooking = () => {
  const { id } = useParams();

  const [menus] = useMenu();
  const [idmMenu, setIdmMenu] = useState([]);

  useEffect(() => {
    if (menus) {
      const filteredMenu = menus.filter((menu) => menu._id === id);
      setIdmMenu(filteredMenu);
    }
  }, [menus, id]);

  const {
    register,
    handleSubmit,
    // watch,

    formState: { errors },
  } = useForm();
  const axiosOpen = useAxiosOpen();
  const axiosProtect = useAxiosProtect();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await axiosOpen.post(image_api, image_file, {
      headers: { "content-type": "multipart/form-data" },
    });
    // console.log(res.data.success);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const res2 = await axiosProtect.patch(`/updateItem/${id}`, menuItem);
      console.log(res2.data);
      if (res2.data.modifiedCount > 0) {
        toast.success("Update product Successfully");
        navigate("/dashboard/manage_items");
      }

      console.log(res.data.data.display_url);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-cinzel font-bold my-6 text-center ">
        UPDATE ITEM
      </h1>

      {idmMenu?.map((menu) => (
        <form
          key={menu?._id}
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name*"
              className="input input-bordered"
              defaultValue={menu?.name}
              required
            />
            {errors.name && (
              <span className="text-red-400 mt-2">This field is required</span>
            )}
          </div>
          <div className="flex  gap-8">
            <label className="form-control  w-full">
              <div className="label ">
                <span className="label-text text-white">Category*</span>
                <span className="label-text-alt">Alt label</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                defaultValue={menu?.category}
              >
                <option value="soup">Soup</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="offered">Offered</option>
                <option value="popular">Popular</option>
              </select>
              {errors.category && (
                <span className="text-red-400 mt-2">
                  This field is required
                </span>
              )}
            </label>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                defaultValue={menu?.price}
                type="number"
                placeholder="Type here"
                className="input input-bordered "
              />
              {errors.price && (
                <span className="text-red-400 mt-2">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={menu?.recipe}
              className="textarea textarea-bordered h-48"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="text-red-400 mt-2">This field is required</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Recipe Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-400 mt-2">This field is required</span>
            )}
          </div>

          <div className="form-control mt-6 ">
            <button
              type="submit"
              className=" bg-custom-red w-48 justify-center items-center gap-2 p-3 text-white font-semibold disabled:opacity-50 flex"
            >
              Update Now !
              <span className="text-2xl">
                <ImSpoonKnife />
              </span>
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default UpdateBooking;
