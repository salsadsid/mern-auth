import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { useRefreshMutation } from "../../features/auth/authApi";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import useAuth from "../../hooks/useAuth";
import usePersist from "../../hooks/usePersist";

const Main = () => {
  // const token = useSelector(selectCurrentToken);
  // console.log(token);
 
  
  usePersist()
  
  // let content;

  // const { email, role } = useAuth();
  // if (email) {
  //   content = <p>Hello</p>;
  // }
  // if (isLoading) {
  //   content = (
  //     <>
  //       <Nav></Nav>
  //       <div className="h-80 flex items-center justify-center">
  //         <BeatLoader color="#2563EB" />
  //       </div>
  //     </>
  //   );
  // }
  // if(isError){
  //   <>
  //       <Nav></Nav>
  //       <div className="h-80 flex items-center justify-center">
  //         <BeatLoader color="#2563EB" />
  //       </div>
  //     </>
  // }
  // if(isSuccess){
  //   content = (
  //     <>
  //       <Nav></Nav>

  //       <Outlet />
  //     </>
  //   );
  // }
  // if (error) {
  //   content = (
  //     <>
  //       <Nav></Nav>

  //       <Outlet />
  //     </>
  //   );
  // }
  return (
    <>
      <Nav></Nav>

      <Outlet />
    </>
  );
};

export default Main;
