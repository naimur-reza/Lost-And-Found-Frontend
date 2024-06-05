import { QueryParams } from "@/types/common";
import { baseApi } from "./baseApi";

const foundItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoundItems: builder.query<any, QueryParams>({
      query: ({ limit, page, searchTerm, sortBy }) => ({
        url: "/found-items",
        params: {
          limit,
          page,
          searchTerm,
          sortBy,
        },
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
    getSingleFoundItem: builder.query({
      query: (id) => ({
        url: `/found-items/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllFoundItemsQuery,
  useGetFoundItemsCategoryQuery,
  useReportFoundItemMutation,
  useGetSingleFoundItemQuery,
} = foundItemsApi;
