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
        })
    })

})

export const {useAllFriendQuery,useAddFriendRequestMutation}=friendApi