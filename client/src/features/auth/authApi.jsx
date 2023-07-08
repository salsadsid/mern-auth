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
        }),
        persistAuth:builder.query({
            query:(data)=>({
                url:`user/auth`,
                headers:{
                    authorization:`Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`
                }
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation,usePersistAuthQuery}= authApi