import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/route/protected-route";
import OpenHouses from "@pages/admin/open-houses";
import Dashboard from "@pages/dashboard";
import GraphiQLPage from "@pages/graphiql";
import { Contacts, Projects, Tasks } from "@pages/index";
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
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <Contacts />
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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/graphiql"
          element={
            <ProtectedRoute>
              <GraphiQLPage />
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
