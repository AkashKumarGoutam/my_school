import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const PrincipalProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/verify_principal")
      .then(res => {
        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          navigate('/principal_login');
        }
      })
      .catch(() => {
        navigate('/principal_login');
      });
  }, [navigate]);

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default PrincipalProtectedRoutes;
