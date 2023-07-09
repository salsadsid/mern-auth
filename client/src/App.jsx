import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {  useRefreshMutation } from "./features/auth/authApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";

function App() {
  const token= useSelector(selectCurrentToken);
  console.log(token)
  const [refresh,{isLoading}]=useRefreshMutation()
  useEffect(()=>{
    const verifyRefreshToken=async()=>{
       await refresh() 
    }
    verifyRefreshToken();
  },[])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
