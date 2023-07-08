import { createSlice } from "@reduxjs/toolkit";

const initialState={
   
}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userInfo=action.payload;
            localStorage.setItem('accessToken',JSON.stringify(action.payload.data.data.token))
        }
    }
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;