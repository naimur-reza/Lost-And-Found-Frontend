import { authKey } from "@/constants/authKey";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

export const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //   Do something before request is sent

    const token = getFromLocalStorage(authKey);

    console.log(token);

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config = error.config;
    if (error?.response?.errorDetails?.status === 401 && !config.sent) {
      config.sent = true;

      // do logout

      // redirect to login page
      window.location.href = "/login";

      return;
    } else {
      const responseObject = {
        statusCode: error?.response?.data?.errorDetails?.status || 500,
        message: error?.response?.data?.message || "Something went wrong!!!",
        errorMessages: error?.response?.data?.message,
      };

      return responseObject;
    }
  }
);
