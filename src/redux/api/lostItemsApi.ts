import { baseApi } from "./baseApi";

const lostItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLostItems: builder.query({
      query: () => ({
        url: "/lost-items",
      }),
    }),
    getLostItemsCategory: builder.query({
      query: () => ({
        url: "/lost-item-categories",
      }),
    }),

    reportLostItem: builder.mutation({
      query: (data) => ({
        url: "/lost-items",
        data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllLostItemsQuery,
  useGetLostItemsCategoryQuery,
  useReportLostItemMutation,
} = lostItemsApi;
