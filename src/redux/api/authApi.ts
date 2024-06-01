import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({ url: "/my-profile" }),
    }),
  }),
});

export const { useGetMyProfileQuery } = authApi;
