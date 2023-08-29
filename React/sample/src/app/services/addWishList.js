import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const addWishList = createApi({
  reducerPath: 'addWishList',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/details' }),
  endpoints: (builder) => ({
      addToWishlist :builder.mutation({
        query(data) {
          console.log(data)
       return {
            url: `/${data.id}`,
            method: 'PUT',
            body:data,
          }
        },
      }),
  }),
})

export const { useAddToWishlistMutation } = addWishList