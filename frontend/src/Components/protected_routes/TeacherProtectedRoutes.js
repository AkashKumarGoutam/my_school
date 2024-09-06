import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const TeacherProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/verify_teacher")
      .then(res => {
        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          navigate('/teacher_login');
        }
      })
      .catch(() => {
        navigate('/teacher_login');
      });
  }, [navigate]);

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default TeacherProtectedRoutes;
