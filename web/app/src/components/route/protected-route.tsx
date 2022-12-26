import { Navigate } from "react-router-dom";

import { useAuth } from "~hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }

  return (children as React.ReactElement);
};
