import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'


import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../../features/auth/authSlice"
import PulseLoader from 'react-spinners/PulseLoader'
import { useRefreshMutation } from "../../features/auth/authApi"
import usePersist from "../../hooks/usePersist"

const PersistLogin = ({children}) => {

  
    // const token = useSelector(selectCurrentToken)
    // const effectRan = useRef(false)

    // const [trueSuccess, setTrueSuccess] = useState(false)

    // const [refresh, {
    //     isUninitialized,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // }] = useRefreshMutation()


    // useEffect(() => {

    //     if (effectRan.current === true ) { // React 18 Strict Mode

    //         const verifyRefreshToken = async () => {
    //             console.log('verifying refresh token')
    //             try {
    //                 //const response = 
    //                 await refresh()
    //                 //const { accessToken } = response.data
    //                 setTrueSuccess(true)
    //             }
    //             catch (err) {
    //                 console.error(err)
    //             }
    //         }

    //         if (!token) verifyRefreshToken()
    //     }

    //     return () => effectRan.current = true

    //     // eslint-disable-next-line
    // }, [])

    const [isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error,token,trueSuccess] = usePersist();
    let content
   if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <PulseLoader color={"#FFF"} />
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        content = (
            <p className='errmsg'>
                {`${error?.data?.message} - `}
                <Link to="/login">Please login again</Link>.
            </p>
        )
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        return children
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        return children
    }

    return content
}
export default PersistLogin