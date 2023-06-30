import React, { ReactNode } from "react";
import { useProfileSelector } from "../store/slice/profile";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({children}) => {
  const { data } = useProfileSelector();
  return !data ? <Navigate to="/login" replace /> : <>{children}</>;
}