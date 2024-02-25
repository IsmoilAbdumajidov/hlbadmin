import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getFromLS } from '../utils/localStorage';

const PrivateRoute = ({ children, path }) => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [isChecking, setIsChecking] = useState(true);

    const token = getFromLS("a-token")
    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false)
        }
        setIsChecking(false);
    }, []);
    
    // console.log(isAuthenticated);

    if (isAuthenticated==false) {
        return <Navigate state={{from:location}} to="/register" replace />;
        
    }

    return children
}

export default PrivateRoute