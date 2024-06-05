import { QueryParams } from "@/types/common";
import { baseApi } from "./baseApi";

const lostItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLostItems: builder.query<any, QueryParams>({
      query: ({ limit = 10, page = 1, searchTerm, sortBy } = {}) => ({
        url: "/lost-items",
        params: {
          limit,
          page,
          searchTerm,
          sortBy,
        },
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

    getSingleLostItem: builder.query({
      query: (id) => ({
        url: `/lost-items/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllLostItemsQuery,
  useGetLostItemsCategoryQuery,
  useReportLostItemMutation,
  useGetSingleLostItemQuery,
} = lostItemsApi;
