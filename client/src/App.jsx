import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {  useRefreshMutation } from "./features/auth/authApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";
import BeatLoader from 'react-spinners/BeatLoader'

function App() {
  const token= useSelector(selectCurrentToken);
  console.log(token)
  const [refresh,{isLoading,isError,error}]=useRefreshMutation()
  useEffect(()=>{
    const verifyRefreshToken=async()=>{
      await refresh() 
    }
    verifyRefreshToken();
  },[])
  if(isLoading&& isError && error){
    return <BeatLoader color="#36d7b7" />
  }
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
