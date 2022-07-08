import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({loggedIn, children}) => {

            if (!loggedIn) {
                return <Navigate to="/sign-in"/>
            }
                return children
};

export default ProtectedRoute;