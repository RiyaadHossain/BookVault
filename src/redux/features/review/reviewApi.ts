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
  }),
});

export const { usePostReviewMutation, useGetReviewsQuery } = reviewApi;
