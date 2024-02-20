import { FaClipboardList } from "react-icons/fa";
import HeadTitle from "../../Utility/Shared/HeadTitle ";
import ContactInformation from "./ContactInformation";
import Container from "../../Utility/Container";

const Reservation = () => {
  return (
    <section className="mb-20">
      <HeadTitle titleHead="Reservation" titleMain="BOOK A TABLE" />

      <form className="bg-custom-naveBlueLow p-9 rounded-xl space-y-5 mx-5">
        {/* up state */}
        <div className="flex flex-col lg:flex-row gap-12">
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text text-white font-semibold cursor-pointer">
                Date*
              </span>
            </div>
            <input
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
            <select className="select select-bordered cursor-pointer">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
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
              type="text"
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
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full cursor-pointer"
            />
          </label>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="gap-2 text-white font-medium text-lg bg-gradient-to-r from-[#835D23] to-[#ce9f59]  flex w-44 py-3 px-3">
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
