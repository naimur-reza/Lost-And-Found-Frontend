import { baseApi } from "./baseApi";

const claimsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createClaim: builder.mutation({
      query: (data) => ({ url: "/claims", method: "POST", data }),
    }),
  }),
});

export const { useCreateClaimMutation } = claimsApi;
