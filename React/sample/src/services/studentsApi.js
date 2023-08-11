import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/stud' }),
  endpoints: (builder) => ({
        getStudents: builder.query({
            query: (prod) => ``,
        }),
        addStudents: builder.mutation({
            query: (x) =>
            ({
            url: `/`,
            method: 'POST',
            body: x,
            }),
        }),
        deleteStudent: builder.mutation({
            query(id) {
              return {
                url: `/${id}`,
                method: 'DELETE',
              }
            },
          
        }),
        updateStudent: builder.mutation({
            query(data) {
               
           return {
                url: `/${data.id}`,
                method: 'PUT',
                body:data,
              }
            },
            
          }),
  })
})
console.dir(studentsApi)
export const {useGetStudentsQuery,useAddStudentsMutation, useDeleteStudentMutation,
useLazyGetStudentsQuery, useUpdateStudentMutation  } = studentsApi