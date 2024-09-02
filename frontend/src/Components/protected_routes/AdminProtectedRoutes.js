import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const AdminProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/verify_admin")
      .then(res => {
        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          navigate('/admin_login');
        }
      })
      .catch(() => {
        navigate('/admin_login');
      });
  }, [navigate]);

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default AdminProtectedRoutes;
