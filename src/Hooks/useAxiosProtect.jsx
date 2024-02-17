import axios from "axios";

export const axioProtect = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
const useAxiosProtect = () => {
  return axioProtect;
};

export default useAxiosProtect;
