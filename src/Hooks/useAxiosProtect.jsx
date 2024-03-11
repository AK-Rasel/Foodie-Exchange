import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

export const axiosProtect = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosProtect = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosProtect.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosProtect.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response.status;
        if (status === 403) {
          console.log("access");

          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosProtect.interceptors.request.eject(requestInterceptor);
      axiosProtect.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return axiosProtect;
};

export default useAxiosProtect;
