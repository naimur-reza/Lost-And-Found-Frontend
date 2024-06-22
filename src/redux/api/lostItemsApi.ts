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
      providesTags: ["items"],
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
      providesTags: ["items"],
    }),
    getMyLostItems: builder.query({
      query: () => ({
        url: `/lost-items/my-lost-items`,
      }),
    }),

    changeLostItemStatus: builder.mutation({
      query: (id) => ({
        url: `/lost-items/${id}/status`,
        method: "PATCH",
      }),
      invalidatesTags: ["items"],
    }),
  }),
});

export const {
  useGetAllLostItemsQuery,
  useGetLostItemsCategoryQuery,
  useReportLostItemMutation,
  useGetSingleLostItemQuery,
  useGetMyLostItemsQuery,
  useChangeLostItemStatusMutation,
} = lostItemsApi;
