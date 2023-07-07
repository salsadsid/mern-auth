import apiSlice from "../api/apiSlice";

const authApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(data)=>({
                url:"user/signup",
                method:"POST",
                body:data
            })
        })
    })
})

export const {useRegisterMutation}= authApi