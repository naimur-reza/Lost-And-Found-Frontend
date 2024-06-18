import { baseApi } from "./baseApi";

const claimsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createClaim: builder.mutation({
      query: (data) => ({ url: "/claims", method: "POST", data }),
    }),
    getMyClaims: builder.query({
      query: () => ({ url: "/claims/my-claims" }),
    }),
  }),
});

export const { useCreateClaimMutation, useGetMyClaimsQuery } = claimsApi;
