import { FaClipboardList } from "react-icons/fa";
import HeadTitle from "../../Utility/Shared/HeadTitle ";
import ContactInformation from "./ContactInformation";
import Container from "../../Utility/Container";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosProtect from "../../Hooks/useAxiosProtect";
import toast from "react-hot-toast";
import moment from "moment";
import useAuthContext from "../../Hooks/useAuthContext";

const Reservation = () => {
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    const inputTime = event.target.value;
    // Split the time string into hours and minutes
    const [hours, minutes] = inputTime.split(":");
    // Convert hours to integer
    const parsedHours = parseInt(hours, 10);
    // Determine whether it's AM or PM
    const period = parsedHours >= 12 ? "PM" : "AM";
    // Convert hours to 12-hour format
    const displayHours = parsedHours > 12 ? parsedHours - 12 : parsedHours;
    // Format the time
    const formattedTime = `${displayHours}:${minutes} ${period}`;
    // Update state with the formatted time
    setTime(formattedTime);
  };
  const axiosProtect = useAxiosProtect();
  const onSubmit = async (data) => {
    const tableBooking = {
      date: data.date,
      email: data.email,
      guest: data.guest,
      name: data.name,
      phoneNumber: data.phoneNumber,
      time,
      activity: "pending",
      bookingTime: moment().format("h:mm a"),
    };
    // console.log(tableBooking);
    const res = await axiosProtect.post("/booking", tableBooking);
    console.log(res.data);

    if (res.data.insertedId) {
      toast.success("successFully booking add and booking pending...");
      reset();
    }
  };
  return (
    <section className="mb-20">
      <HeadTitle titleHead="Reservation" titleMain="BOOK A TABLE" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-custom-naveBlueLow p-9 rounded-xl space-y-5 mx-5"
      >
        {/* up state */}
        <div className="flex flex-col lg:flex-row gap-12">
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold cursor-pointer">
                Date*
              </span>
            </div>
            <input
              {...register("date")}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold">Time*</span>
            </div>
            <input
              // {...register("time")}
              // value={time}
              onChange={handleTimeChange}
              // step="1"
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full cursor-pointer"
            />
          </label>
          {/* select */}
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white">Guest*</span>
            </div>
            <select
              {...register("guest")}
              defaultValue="Pick one"
              className="select select-bordered cursor-pointer"
            >
              <option disabled>Pick one</option>
              <option>1-2</option>
              <option>1-5</option>
              <option>1-10</option>
              <option>1-15</option>
              <option>1-20</option>
            </select>
          </label>
        </div>
        {/* down  state */}
        <div className="flex flex-col lg:flex-row gap-12">
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold cursor-pointer">
                Name*
              </span>
            </div>
            <input
              {...register("name")}
              type="text"
              value={user?.displayName}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold">
                Phone*
              </span>
            </div>
            <input
              {...register("phoneNumber")}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full cursor-pointer"
            />
          </label>
          {/* email */}
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold">
                Email*
              </span>
            </div>
            <input
              {...register("email")}
              type="email"
              value={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full cursor-pointer"
            />
          </label>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="submit"
            className="gap-2 text-white font-medium text-lg bg-gradient-to-r from-custom-red to-custom-naveBlueLow border  flex w-44 py-3 px-3"
          >
            Book A Table <FaClipboardList className="text-2xl" />
          </button>
        </div>
      </form>
      {/* heads */}
      <HeadTitle titleHead="Visit Us" titleMain="OUR LOCATION" />
      {/* info */}
      <Container>
        <ContactInformation />
      </Container>
    </section>
  );
};

export default Reservation;
