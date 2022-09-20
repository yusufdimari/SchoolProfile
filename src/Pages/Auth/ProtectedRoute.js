import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../components/Auth/AppProvider";
import { useAuth } from "../../components/Auth/use-auth";

export default function ProtectedRoute({ children }) {
  const auth = useAuth();
  // const { user } = useAppContext();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to={"/SchoolProfile/login"} state={{ from: location }} />;
  } else {
    return children;
  }
}
