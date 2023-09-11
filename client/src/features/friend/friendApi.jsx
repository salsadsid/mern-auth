import apiSlice from "../api/apiSlice";

const friendApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        allFriend:builder.query({
            query:()=>({
                url:"friend/all-friend",
            })
        })
    })
})

export const {useAllFriendQuery}=friendApi