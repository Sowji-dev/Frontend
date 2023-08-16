
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const custList = createApi({
  reducerPath: 'custList',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/details' }),
  endpoints: (builder) => ({
    getCustDetails: builder.query({
        query: () => ``,
    }),
    deleteStudent: builder.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
        }
      },
    
  }),
    updateCust: builder.mutation({
      query(data) {
        console.log(data)
     return {
          url: `/${data.id}`,
          method: 'PUT',
          body:data,
        }
      },
    }),
    addfeedback :builder.mutation({
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

export const { useGetCustDetailsQuery ,useLazyGetCustDetailsQuery, useUpdateCustMutation,
useDeleteStudentMutation,useAddfeedbackMutation} = custList