import apiSlice from "../api/apiSlice";

const friendApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        allFriend:builder.query({
            query:()=>({
                url:"friend/all-friend",
            })
        }),
        addFriendRequest:builder.mutation({
            query:(data)=>({
                url:"friend/add-friend",
                method:"PATCH",
                body:data
            })
        }),
        allFriendRequest:builder.query({
            query:(email)=>({
                url:`friend/all-requests/${email}`
            })
        })
    })

})

export const {useAllFriendQuery,useAddFriendRequestMutation,useAllFriendRequestQuery}=friendApi