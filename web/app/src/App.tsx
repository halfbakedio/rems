import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/route/protected-route";
import OpenHouses from "@pages/admin/open-houses";
import Dashboard from "@pages/dashboard";
import Login from "@pages/login";
import OpenHouse from "@pages/open-house";
import Profile from "@pages/profile";
import Register from "@pages/register";

import { useAuth } from "~hooks/useAuth";

import AuthVerify from "./common/auth-verify";

const App = () => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/open-houses/:id"
          element={
            <ProtectedRoute>
              <OpenHouse />
            </ProtectedRoute>
          }
        />
        <Route path="/admin">
          <Route
            path="open-houses"
            element={
              <ProtectedRoute>
                <OpenHouses />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <AuthVerify logout={handleLogout} />
    </>
  );
};

export default App;
