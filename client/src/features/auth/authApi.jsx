import apiSlice from "../api/apiSlice";
import { setCredentials } from "./authSlice";

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
    refresh: builder.mutation({
        query: () => ({
            url: 'user/auth',
            method: 'GET',
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
                const { data } = await queryFulfilled
                console.log(data)
                const { accessToken } = data
                dispatch(setCredentials({ accessToken }))
            } catch (err) {
                console.log(err)
            }
        }
    }),
  })
});

export const { useRegisterMutation, useLoginMutation ,useRefreshMutation} =
  authApi;
