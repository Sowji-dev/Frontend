import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginCust = createApi({
  reducerPath: 'loginCust',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/adminlogin' }),
  endpoints: (builder) => ({
    loginCustomer: builder.query({
        query: (user) => `?phone=${user.phone}&password=${user.password}`,
    }),

  }),
})

export const {  useLoginCustomerQuery,useLazyLoginCustomerQuery } = loginCust