import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "~hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const location = useLocation();

  return (!user?.token) ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children as React.ReactElement
  );
};
