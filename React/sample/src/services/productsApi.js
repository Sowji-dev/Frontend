import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: (prod) => ``,
    }),
    getProductDetails: builder.query({
      query: (prod) => `/${prod}`,
    })
  })
})
console.dir(productsApi)
export const { useGetProductDetailsQuery, useGetProductsQuery } = productsApi