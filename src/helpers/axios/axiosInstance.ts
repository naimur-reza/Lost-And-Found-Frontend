import { authKey } from "@/constants/authKey";
import { IErrorResponse, IResponseType } from "@/types/requestTypes";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Add token to request headers
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseData = {
      data: {
        data: response?.data?.data,
        meta: response?.data?.meta || null,
        message: response?.data?.message,
      },
    };

    return responseData;
  },
  function (error) {
    if (error?.response?.data?.statusCode === 401) {
      // Redirect to login page
      console.log("Unauthorized");
    } else {
      const errorResponse: IErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong!",
        errorMessages: error?.response?.data?.message,
      };

      return errorResponse;
    }
  }
);

export default instance;
