import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

function LogoutPage() {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
}

export default LogoutPage;
