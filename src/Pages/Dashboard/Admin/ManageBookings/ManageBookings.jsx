import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../../../Hooks/useAxiosOpen";
import { useState } from "react";
import Swal from "sweetalert2";
import { BsCheckCircleFill } from "react-icons/bs";
import toast from "react-hot-toast";

const ManageBookings = () => {
  const axios = useAxiosOpen();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get("/booking");
      return res.data;
    },
  });
  console.log(booking);

  const [checkBook1, setCheckBook1] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckbox1Change = (e) => {
    setCheckBook1(e.target.checked);
    if (e.target.checked) {
      const ids = booking.map((item) => item._id);
      setSelectedIds(ids);
    } else {
      setSelectedIds([]);
    }
  };

  const handleCheckbox2Change = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prevIds) =>
        prevIds.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedIds((prevIds) => [...prevIds, id]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(selectedIds);
    const id = selectedIds;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("/delete_booking", id)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const acceptHandel = async (id) => {
    console.log(id);

    const accept = {
      activity: "done",
    };

    const res = await axios.patch(`/accept_booking/${id}`, accept);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("accept booking Successfully");
      refetch();
    }
  };
  return (
    <section>
      <div className="text-center flex flex-col md:flex-row gap-2 md:justify-between px-5 mb-4">
        <h2 className="text-2xl uppercase font-bold lg:text-start">
          Total booking : {booking?.length}
        </h2>

        <button className="btn bg-custom-red text-white font-medium text-lg">
          {" "}
          Pay
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-5">
          {selectedIds.length ? (
            <button
              type="submit"
              className="text-lg disabled:text-custom-red hover:underline text-red-500 bg-none font-medium text-center"
            >
              Select Remove
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <form className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    onChange={handleCheckbox1Change}
                    checked={checkBook1}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </form>
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                USER EMAIL
              </th>
              <th scope="col" className="px-6 py-3  text-center">
                PHONE NUMBER
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                BOOKING DATE
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                BOOKING TIME
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                ACTIVITY
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((item) => (
              <tr
                key={item?._id}
                className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${item?._id}`}
                      type="checkbox"
                      onChange={() => handleCheckbox2Change(item._id)}
                      checked={selectedIds.includes(item._id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${item?._id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <h2 className="text-wrap">{item?.email}</h2>
                </th>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.phoneNumber}
                </td>
                <td className="px-6 py-4">{item?.date}</td>
                <td className="px-6 py-4">{item?.time}</td>
                <td
                  className={
                    item?.activity === "pending"
                      ? "px-6 py-4 text-red-500 text-center uppercase"
                      : "uppercase text-center px-6 py-4 text-green-500"
                  }
                >
                  {item?.activity}
                </td>

                <td className="px-6 py-4">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  {/* Update */}
                  <button onClick={() => acceptHandel(item?._id)}>
                    <BsCheckCircleFill
                      className={
                        item?.activity === "pending"
                          ? "text-4xl text-green-400"
                          : "text-4xl text-green-600"
                      }
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageBookings;
