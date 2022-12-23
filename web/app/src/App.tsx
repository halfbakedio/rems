import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import OpenHouses from "@pages/admin/open-houses";
import Dashboard from "@pages/dashboard";
import Login from "@pages/login";
import OpenHouse from "@pages/open-house";
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
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/open-houses/:id" element={<OpenHouse />} />
        <Route path="/admin">
          <Route path="open-houses" element={<OpenHouses />} />
        </Route>
      </Routes>

      <AuthVerify logOut={logOut} />
    </>
  );
};

export default App;
