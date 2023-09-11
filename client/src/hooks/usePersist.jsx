import { useState, useEffect, useRef } from "react"
import { useRefreshMutation } from "../features/auth/authApi";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import PulseLoader from "react-spinners/PulseLoader";

const usePersist = () => {
    
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)
    const [refresh, { isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error }] = useRefreshMutation();

    useEffect(() => {

        if (effectRan.current === true ) { // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                // console.log('verifying refresh token')
                try {
                    //const response = 
                    await refresh()
                    //const { accessToken } = response.data
                    setTrueSuccess(true)
                }
                catch (err) {
                    console.error(err)
                }
            }

            if (!token) verifyRefreshToken()
        }

        return () => effectRan.current = true

        // eslint-disable-next-line
    }, [])
    return [isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error,token,trueSuccess]
}
export default usePersist