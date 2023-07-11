
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import BeatLoader from 'react-spinners/BeatLoader'


const RequireAuth = ({children}) => {
    const { email, role,isLoading } = useAuth();
    const location = useLocation()
    if(isLoading){
        return <BeatLoader color="#36d7b7" />
    }
    if(email && role){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RequireAuth;