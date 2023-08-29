
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addProperty = createApi({
  reducerPath: 'addProperty',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/property' }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => ``,
  }),
    addProperty: builder.mutation({
        query: (x) =>{
            console.log(x)
        return ({
        url: `/`,
        method: 'POST',
        body: x,
        })}
    }),

  }),
})

export const { useAddPropertyMutation, useGetPropertiesQuery,
   useLazyGetPropertiesQuery } = addProperty