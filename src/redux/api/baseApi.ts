import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: axiosBaseQuery({
    baseUrl: "https://lost-and-found-system-taupe.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "items"],
});
