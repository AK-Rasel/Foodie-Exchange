import { ImSpoonKnife } from "react-icons/im";
import HeadTitle from "../../../../Utility/Shared/HeadTitle ";
import { useForm } from "react-hook-form";
import useAxiosProtect from "../../../../Hooks/useAxiosProtect";
import toast from "react-hot-toast";
import useAxiosOpen from "../../../../Hooks/useAxiosOpen";
// import { Await } from "react-router-dom";
const image_kay = import.meta.env.VITE_image_Host;
const image_api = `https://api.imgbb.com/1/upload?key=${image_kay}`;
const AddItem = () => {
  const axiosProtect = useAxiosProtect();
  const axiosOpen = useAxiosOpen();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const image_file = { image: data.image[0] };
    const res = await axiosOpen.post(image_api, image_file, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res.data.success);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const res2 = await axiosProtect.post("/addItem", menuItem);
      if (res2.data.insertedId) {
        toast.success("Add product Success!");
        reset();
      }

      console.log(res.data.data.display_url);
    }
  };

  return (
    <section>
      <HeadTitle titleHead="What's new?" titleMain="ADD AN ITEM" />

      <div className="card shrink-0 w-full  shadow-2xl bg-custom-naveBlueLow">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name*"
              className="input input-bordered"
            />
            {errors.recipeNamed && (
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
                defaultValue={"default--"}
              >
                <option disabled value={"default--"}>
                  Pick one
                </option>
                <option>soup</option>
                <option>salad</option>
                <option>pizza</option>
                <option>dessert</option>
                <option>offered</option>
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
              className="textarea textarea-bordered h-48"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipeDetails && (
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
              required
            />
            {errors.recipeImage && (
              <span className="text-red-400 mt-2">This field is required</span>
            )}
          </div>

          <div className="form-control mt-6 ">
            <button
              type="submit"
              className=" bg-custom-red w-48 justify-center items-center gap-2 p-3 text-white font-semibold disabled:opacity-50 flex"
            >
              Send Message
              <span className="text-2xl">
                <ImSpoonKnife />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
