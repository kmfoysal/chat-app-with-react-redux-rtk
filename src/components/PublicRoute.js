import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLogedIn = useAuth();

  return !isLogedIn ? children : <Navigate to="/inbox" />;
};

export default PublicRoute;
