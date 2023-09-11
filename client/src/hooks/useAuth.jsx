import { useSelector } from 'react-redux'
import {selectCurrentToken} from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    // console.log(token);
    if (token) {
        const decoded = jwtDecode(token)
        const { email, role } = decoded.UserInfo
        return { email,role,isTokenValid:true }
    }

    return { email:"", role:"" ,isTokenValid:false}
}
export default useAuth