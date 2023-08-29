
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addCust = createApi({
  reducerPath: 'addCust',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/details' }),
  endpoints: (builder) => ({
    addCustDetails: builder.mutation({
        query: (x) =>
        ({
        url: `/`,
        method: 'POST',
        body: x,
        }),
    }),

  }),
})

export const {  useAddCustDetailsMutation } = addCust