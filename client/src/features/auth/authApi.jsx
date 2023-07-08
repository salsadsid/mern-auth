import apiSlice from "../api/apiSlice";

const authApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(data)=>({
                url:"user/signup",
                method:"POST",
                body:data
            })
        }),
        login:builder.mutation({
            query:(data)=>({
                url:"user/login",
                method:"POST",
                body:data
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation}= authApi