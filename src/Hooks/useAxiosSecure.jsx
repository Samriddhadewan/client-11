import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleUserLogOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(
          "ERROR caught from our very own interceptor",
          error.response
        );
        {
          if (error.response.status === 401 || error.response.status === 403) {
            // logout
            handleUserLogOut();
            // navigate to login
            navigate("/login");
          }
        }
      }
    );
  }, [handleUserLogOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
