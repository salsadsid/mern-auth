import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { useRefreshMutation } from "../../features/auth/authApi";
import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Main = () => {
  const token = useSelector(selectCurrentToken);
  console.log(token);
  const [refresh, { isLoading, isError, error,isSuccess }] = useRefreshMutation();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      await refresh();
    };
    verifyRefreshToken();
  }, []);
  // console.log(isLoading,"isLoading")
  // console.log(isError,"isError")
  // console.log(error,"error")
  // console.log(isSuccess,"isSuccess")

  let content;
  if (isLoading) {
    content = (
      <>
        <Nav></Nav>
        <div className="h-80 flex items-center justify-center">
          <BeatLoader color="#2563EB" />
        </div>
      </>
    );
  }
  if(isError){
    <>
        <Nav></Nav>
        <div className="h-80 flex items-center justify-center">
          <BeatLoader color="#2563EB" />
        </div>
      </>
  }
  if(isSuccess){
    content = (
      <>
        <Nav></Nav>

        <Outlet />
      </>
    );
  }
  if (error) {
    content = (
      <>
        <Nav></Nav>

        <Outlet />
      </>
    );
  }
  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default Main;
