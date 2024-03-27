import Swal from "sweetalert2";
import useMenu from "../../../../Hooks/useMenu";

import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import useAxiosProtect from "../../../../Hooks/useAxiosProtect";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../../../Hooks/useAxiosOpen";

const ManageItems = () => {
  // const [menu, refetch] = useMenu();

  // data combo
  const axiosOpen = useAxiosOpen();
  const {
    data: menu = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosOpen.get(
        `/food_items?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });
  // console.log(menu.total);
  const { result: AllMenu = [] } = menu;
  // console.log(AllMenu);
  const limit = 10;
  const totalPage = Math.ceil(menu?.total / limit);
  // console.log("totall", menu?.total);
  const [page, setPage] = useState(1);

  const previousHandel = () => {
    // console.log(page);
    // setPage(page - 1);
    if (page > 1) {
      setPage(page - 1);
      refetch();
    }
  };
  const nextHandel = () => {
    // setPage(page + 1);
    // console.log(page);
    // console.log(totalPage);
    if (page < totalPage) {
      setPage(page + 1);
      // console.log(page);
      refetch();
    }
  };

  console.log(totalPage);

  const axios = useAxiosProtect();

  const [checkBook1, setCheckBook1] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckbox1Change = (e) => {
    setCheckBook1(e.target.checked);
    if (e.target.checked) {
      const ids = menu.map((item) => item._id);
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
          .post("/delete_menu", id)
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

  return (
    <section className="grid gap-5">
      <div className="text-center flex flex-col md:flex-row gap-2 md:justify-between px-5 mb-4">
        <h2 className="text-2xl uppercase font-bold lg:text-start">
          Total menu : {menu.total}
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
              <th scope="col" className="px-6 py-3">
                Food Image
              </th>
              <th scope="col" className="px-6 py-3">
                Food Name
              </th>

              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllMenu?.map((item) => (
              <tr
                key={item?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={item?.image} />
                    </div>
                  </div>
                </th>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.name}
                </td>
                <td className="px-6 py-4">{item?.category}</td>
                <td className="px-6 py-4">$ {item?.price}</td>

                <td className="px-6 py-4">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  {/* Update */}
                  <button className="btn hover:bg-custom-naveBlueLow text-white border bg-custom-red  border-custom-naveBlueLow hover:border-custom-red">
                    <Link to={`/dashboard/Update_booking/${item._id}`}>
                      <FaRegPenToSquare className="text-3xl " />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="join justify-center items-center mx-auto w-56">
        <button onClick={previousHandel} className="join-item btn">
          «
        </button>
        {/* {[...Array(totalPage).fill(0)].map((item, index) => {
          const pageNumber = index + 1;
          return (
            <button
              onClick={() => setPage(pageNumber)}
              key={pageNumber}
              className={`${
                page === pageNumber
                  ? "join-item btn btn-outline btn-primary "
                  : "join-item btn btn-outline btn-ghost"
              }`}
            >
              {pageNumber}
            </button>
          );
        })} */}
        <button className="join-item btn">{page}</button>
        <button onClick={nextHandel} className="join-item btn">
          »
        </button>
      </div>
    </section>
  );
};

export default ManageItems;
