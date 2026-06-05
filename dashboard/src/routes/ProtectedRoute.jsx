import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../utils/API";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    API.post("/")
      .then((res) => {
        setIsAuth(res.data.status);
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, []);

  if (isAuth === null) {
    return <h2>Loading...</h2>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;