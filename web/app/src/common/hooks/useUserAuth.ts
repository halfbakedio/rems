import { useEffect, useState } from "react";

import AuthService from "@services/auth";

const useUserAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    const handleLoggedIn = () => setIsAuthenticated(true);
    const handleLoggedOut = () => setIsAuthenticated(false);

    window.addEventListener("logged-in", handleLoggedIn);
    window.addEventListener("logged-out", handleLoggedOut);

    if (user) {
      setIsAuthenticated(true);
    }

    return () => {
      window.removeEventListener("logged-in", handleLoggedIn);
      window.removeEventListener("logged-out", handleLoggedOut);
    };
  }, []);

  return isAuthenticated;
};

export default useUserAuth;
