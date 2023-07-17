import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviews: builder.query({
      query: (id: string) => `review/${id}`,
      providesTags: ["Reviews"],
    }),
    updateReview: builder.mutation({
      query: ({ id, email, data }) => ({
        url: `/review/${id}/user/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),
    deleteReview: builder.mutation({
      query: ({ id, email }) => ({
        url: `/review/${id}/user/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
