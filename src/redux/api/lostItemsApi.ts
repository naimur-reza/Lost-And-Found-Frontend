import { baseApi } from "./baseApi";

interface LostItemsQueryParams {
  limit?: number;
  page?: number;
}

const lostItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLostItems: builder.query<any, LostItemsQueryParams>({
      query: ({ limit = 10, page = 1 } = {}) => ({
        url: "/lost-items",
        params: {
          limit,
          page,
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
