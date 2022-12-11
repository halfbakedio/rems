import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "@pages/dashboard";
import Login from "@pages/login";
import Profile from "@pages/profile";
import Register from "@pages/register";

import AuthService from "@services/auth";

import AuthVerify from "./common/auth-verify";

const App = () => {
  const logOut = useCallback(() => {
    AuthService.logout();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>

      <AuthVerify logOut={logOut} />
    </>
  );
};

export default App;
