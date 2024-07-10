// import React from 'react'

import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoute({isLoggedIn, children}){
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to={"/login"}></Navigate>
    }
} 

export default PrivateRoute;