import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:"salman"
}

const authSlice= createSlice({
    name:"user",
    initialState,
    reducers:{}
})

export default authSlice.reducer;