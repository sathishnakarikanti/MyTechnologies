import { useState } from "react"

interface LoginUserDetails {
    userName : string,
    password : string
}
export const LoginComp = () => {
    //type assertion and optional chaining
    const [loginStatus, setLoginStatus] = useState <boolean | number >(false);
    const [userDetails, setUserDetails] = useState < LoginUserDetails | null >(null);
    // const [userDetails, setUserDetails] = useState < LoginUserDetails >({} as LoginUserDetails);

    const userLogin = () => {
        setLoginStatus(1);
        setUserDetails( {
            userName : 'sathish-nakarikanti',
            password : 'Saha@123'
        })
    }
    const userLogout = () => {
        setLoginStatus(0);
        setUserDetails({} as LoginUserDetails)
    }
    return (
        <>
        <button onClick={userLogin}>Login</button>
        <button onClick={userLogout}>Logout</button>
        {loginStatus ? <p>user is logged in.</p> : <p>user is logged out.</p>}
        <p>userName: {userDetails?.userName}</p> 
        <p>password: {userDetails?.password}</p>
        {/* <p>userName: {userDetails.userName}</p> 
        <p>password: {userDetails.password}</p> */}
        </>
    )
}

