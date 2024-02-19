import axios from "axios";

export const axiosOpen = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxiosOpen = () => {
  return axiosOpen;
};

export default useAxiosOpen;
