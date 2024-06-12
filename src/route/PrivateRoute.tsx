import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track whether the validation request is in progress
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios.get("http://127.0.0.1:8072/auth/validate?token=" + token)
        .then(() => {
          setIsAuthenticated(true);
          setIsLoading(false); // Request is complete, update loading state
        })
        .catch(() => {
          // If token validation fails, clear token from localStorage
          localStorage.removeItem('token');
          setIsLoading(false); // Request is complete, update loading state
        });
    } else {
      setIsLoading(false); // No token, request is complete, update loading state
    }
  }, [token]);

  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
