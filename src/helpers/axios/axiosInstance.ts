import { authKey } from "@/constants/authKey";
import { logoutInstance } from "@/services/actions/logoutInstance";
import { logoutUser } from "@/services/actions/logoutUser";
import { IErrorResponse, IResponseType } from "@/types/requestTypes";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import Router from "next/router";

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
    console.log(error);
    if (error?.response?.data?.message === "jwt expired" || "jwt malformed") {
      logoutInstance();
      Router.push("/login");
    } else {
      const errorResponse: IErrorResponse = {
        error: {
          statusCode: error?.response?.data?.statusCode || 500,
          message: error?.response?.data?.message || "Something went wrong!",
          errorMessages: error?.response?.data?.message,
        },
      };

      return errorResponse;
    }
  }
);

export default instance;
