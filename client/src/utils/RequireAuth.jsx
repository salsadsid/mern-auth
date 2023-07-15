import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import BeatLoader from "react-spinners/BeatLoader";

const RequireAuth = ({ children }) => {
  const { email, role, isTokenValid } = useAuth();
  const location = useLocation();
  if (!isTokenValid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (email && role && isTokenValid) {
    return children;
  }
  return (
    <div>
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default RequireAuth;
