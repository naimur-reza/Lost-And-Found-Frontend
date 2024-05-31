import { baseApi } from "./baseApi";

const foundItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoundItems: builder.query({
      query: () => ({
        url: "/found-items",
      }),
    }),
    getFoundItemsCategory: builder.query({
      query: () => ({
        url: "/found-item-categories",
      }),
    }),

    reportFoundItem: builder.mutation({
      query: (data) => ({
        url: "/found-items",
        data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllFoundItemsQuery,
  useGetFoundItemsCategoryQuery,
  useReportFoundItemMutation,
} = foundItemsApi;
