import apiSlice from "../api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: {...data},
      }),
    }),
    sendLogOut: builder.mutation({
      query: () => ({
          url: 'user/logout',
          method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
              const { data } = await queryFulfilled
              console.log(data)
              const res =dispatch(logOut())
              console.log(res)
              // setTimeout(() => {
                  dispatch(apiSlice.util.resetApiState())
              // }, 1000)
          } catch (err) {
              console.log(err)
          }
      }
  }),
    refresh: builder.mutation({
        query: () => ({
            url: 'user/auth',
            method: 'GET',
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
                const { data } = await queryFulfilled
                // console.log(data)
                const { accessToken } = data
                dispatch(setCredentials({ accessToken }))
            } catch (err) {
                console.log(err)
            }
        }
    }),
    userDetails:builder.query({
      query:(email)=>({
        url:`user/${email}`,
        method:'GET'
      }),
      providesTags:["User"]
    }),
    updateUserProfile:builder.mutation({
      query:(data)=>({
        url:`user/update`,
        method:"PATCH",
        body:data
      }),
      invalidatesTags:["User"]
    })
  })
});

export const { useRegisterMutation, useLoginMutation ,useRefreshMutation,useSendLogOutMutation , useUserDetailsQuery,useUpdateUserProfileMutation} =
  authApi;
