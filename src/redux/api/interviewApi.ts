import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const interviewApi = createApi({
  reducerPath: 'interviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPageData: builder.query({
      query: (url: string) => url,
      keepUnusedDataFor: 0.0001,
    }),
  }),
});

export const { useGetPageDataQuery } = interviewApi;
