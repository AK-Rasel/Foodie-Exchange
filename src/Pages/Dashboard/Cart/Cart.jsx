// import { useState } from "react";
// import useCarts from "../../../Hooks/useCarts";

// const Cart = () => {
//   const [cart] = useCarts();
//   const sum = cart.reduce((acc, cart) => {
//     return acc + cart.price;
//   }, 0);
//   const itemSumPrice = sum.toFixed(2);
//   //   console.log(itemSumPrice);
//   const [checkBook1, setCheckBook1] = useState("");
//   const [checkBook2, setCheckBook2] = useState("");
//   //   handel
//   const handel = (e) => {
//     e.preventDefault();

//     console.log("checkBook1", checkBook1);
//     console.log("checkBook2", checkBook2);
//   };

//   return (
//     <section>
//       <div className="text-center flex flex-col md:flex-row   gap-2 md:justify-between px-5 mb-4">
//         <h2 className=" text-2xl uppercase  font-bold lg:text-start ">
//           Total orders : {cart.length}
//         </h2>
//         <h2 className=" text-2xl uppercase  font-bold lg:text-start ">
//           Total Price : $ {itemSumPrice}
//         </h2>
//         <button className="btn bg-custom-yellow text-white font-medium  text-lg">
//           {" "}
//           Pay
//         </button>
//       </div>
//       <form onSubmit={handel}>
//         <div className=" my-5">
//           <button
//             type="submit"
//             className=" text-lg hover:underline  text-red-500 bg-none font-medium text-center "
//           >
//             Select Remove
//           </button>
//         </div>
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-all-search"
//                       type="checkbox"
//                       onBlur={(e) => setCheckBook1(e.target.value)}
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <label htmlFor="checkbox-all-search" className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Food Name
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Delivery State
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart?.map((item) => (
//                 <tr
//                   key={item?._id}
//                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                 >
//                   <td className="w-4 p-4">
//                     {/* checkBox */}
//                     <div className="flex items-center">
//                       <input
//                         value={item?._id}
//                         onBlur={(e) => setCheckBook2(e.target.value)}
//                         id="checkbox-table-search-1"
//                         type="checkbox"
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         htmlFor="checkbox-table-search-1"
//                         className="sr-only"
//                       >
//                         checkbox
//                       </label>
//                     </div>
//                   </td>
//                   {/* head */}
//                   <th
//                     scope="row"
//                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {item?.name}
//                   </th>
//                   {/* data */}

//                   <td className="px-6 py-4">{item?.category}</td>
//                   <td className="px-6 py-4">$ {item?.price}</td>
//                   <td className="px-6 py-4">ToDo</td>

//                   <td className="flex items-center px-6 py-4">
//                     <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Cart;

// two

// import { useState } from "react";
// import useCarts from "../../../Hooks/useCarts";

// const Cart = () => {
//   const [cart] = useCarts();
//   const sum = cart.reduce((acc, cart) => {
//     return acc + cart.price;
//   }, 0);
//   const itemSumPrice = sum.toFixed(2);

//   const [checkBook1, setCheckBook1] = useState(false);
//   const [selectedIds, setSelectedIds] = useState([]);

//   const handleCheckbox1Change = (e) => {
//     setCheckBook1(e.target.checked);
//     if (e.target.checked) {
//       const ids = cart.map((item) => item._id);
//       setSelectedIds(ids);
//     } else {
//       setSelectedIds([]);
//     }
//   };

//   const handleCheckbox2Change = (id) => {
//     if (selectedIds.includes(id)) {
//       setSelectedIds((prevIds) =>
//         prevIds.filter((selectedId) => selectedId !== id)
//       );
//     } else {
//       setSelectedIds((prevIds) => [...prevIds, id]);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const selectedItems = cart.filter((item) => selectedIds.includes(item._id));

//     console.log("Selected _ids:", selectedItems);
//   };

//   return (
//     <section>
//       <div className="text-center flex flex-col md:flex-row   gap-2 md:justify-between px-5 mb-4">
//         <h2 className=" text-2xl uppercase  font-bold lg:text-start ">
//           Total orders : {cart.length}
//         </h2>
//         <h2 className=" text-2xl uppercase  font-bold lg:text-start ">
//           Total Price : $ {itemSumPrice}
//         </h2>
//         <button className="btn bg-custom-yellow text-white font-medium  text-lg">
//           {" "}
//           Pay
//         </button>
//       </div>
//       <form onSubmit={handleFormSubmit}>
//         <div className=" my-5">
//           <button
//             type="submit"
//             className=" text-lg hover:underline  text-red-500 bg-none font-medium text-center "
//           >
//             Select Remove
//           </button>
//         </div>
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-all-search"
//                       type="checkbox"
//                       onChange={handleCheckbox1Change}
//                       checked={checkBook1}
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <label htmlFor="checkbox-all-search" className="sr-only">
//                       checkbox
//                     </label>
//                   </div>
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Food Name
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Delivery State
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart?.map((item) => (
//                 <tr
//                   key={item?._id}
//                   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                 >
//                   <td className="w-4 p-4">
//                     <div className="flex items-center">
//                       <input
//                         id={`checkbox-table-search-${item?._id}`}
//                         type="checkbox"
//                         onChange={() => handleCheckbox2Change(item._id)}
//                         checked={selectedIds.includes(item._id)}
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                       />
//                       <label
//                         htmlFor={`checkbox-table-search-${item?._id}`}
//                         className="sr-only"
//                       >
//                         checkbox
//                       </label>
//                     </div>
//                   </td>
//                   <th
//                     scope="row"
//                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {item?.name}
//                   </th>
//                   <td className="px-6 py-4">{item?.category}</td>
//                   <td className="px-6 py-4">$ {item?.price}</td>
//                   <td className="px-6 py-4">ToDo</td>
//                   <td className="flex items-center px-6 py-4">
//                     <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Cart;

// three
import { useState } from "react";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosProtect from "../../../Hooks/useAxiosProtect";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const axios = useAxiosProtect();
  const sum = cart.reduce((acc, cart) => {
    return acc + cart.price;
  }, 0);

  const itemSumPrice = sum.toFixed(2);

  const [checkBook1, setCheckBook1] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckbox1Change = (e) => {
    setCheckBook1(e.target.checked);
    if (e.target.checked) {
      const ids = cart.map((item) => item._id);
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
    // console.log(selectedIds);
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
          .post("/delete_items", id)
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

  //   const singelHendel = (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         axios.delete(`/cart/${id}`).then((res) => {
  //           if (res.data.deletedCount) {
  //             refetch();
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //       }
  //     });
  //   };

  return (
    <section>
      <div className="text-center flex flex-col md:flex-row gap-2 md:justify-between px-5 mb-4">
        <h2 className="text-2xl uppercase font-bold lg:text-start">
          Total orders : {cart.length}
        </h2>
        <h2 className="text-2xl uppercase font-bold lg:text-start">
          Total Price : $ {itemSumPrice}
        </h2>
        <button className="btn bg-custom-yellow text-white font-medium text-lg">
          {" "}
          Pay
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-5">
          {selectedIds.length ? (
            <button
              type="submit"
              className="text-lg disabled:text-custom-yellow hover:underline text-red-500 bg-none font-medium text-center"
            >
              Select Remove
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
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
                  </div>
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
                  Delivery State
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
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
                    {item?.name}
                  </th>
                  <td className="px-6 py-4">{item?.category}</td>
                  <td className="px-6 py-4">$ {item?.price}</td>
                  <td className="px-6 py-4">ToDo</td>
                  <td className="flex items-center px-6 py-4">
                    <button
                      //   onClick={() => singelHendel(item._id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </section>
  );
};

export default Cart;
