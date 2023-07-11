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
  const [refresh, { isLoading, isError, error }] = useRefreshMutation();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      await refresh();
    };
    verifyRefreshToken();
  }, []);
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
  if (isError) {
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
