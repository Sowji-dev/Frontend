
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const custList = createApi({
  reducerPath: 'custList',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getCustDetails: builder.query({
        query: (name) => `pokemon/${name}`,
      }),

  }),
})

export const { useGetCustDetailsQuery } = custList