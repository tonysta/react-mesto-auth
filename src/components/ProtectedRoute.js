import React from "react";
import { Navigate } from "react-router-dom";
import {useState} from "react";

const ProtectedRoute = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false);

            if (!loggedIn) {
                return <Navigate to="/sign-in"/>
            }
                return children
};

export default ProtectedRoute;