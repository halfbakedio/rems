import { ReactNode, useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/route/protected-route";
import { default as AdminOpenHouses } from "@pages/admin/open-houses";
import Dashboard from "@pages/dashboard";
import GraphiQLPage from "@pages/graphiql";
import { Contacts, Projects, Tasks } from "@pages/index";
import Login from "@pages/login";
import OpenHouse from "@pages/open-house";
import Profile from "@pages/profile";
import Register from "@pages/register";

import { Page as Settings } from "~features/settings";
import { useAuth } from "~hooks/useAuth";

import AuthVerify from "./common/auth-verify";

const App = () => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, []);

  const protectedRoute = (path: string | undefined, component: ReactNode) => {
    const wrappedComponent = () => (
      <ProtectedRoute>
        {component}
      </ProtectedRoute>
    );

    // assume that the route is the index if path is undefined
    if (path) {
      return <Route path={path} element={wrappedComponent()} />;
    } else {
      return <Route index element={wrappedComponent()} />;
    }
  };

  return (
    <>
      <Routes>
        {protectedRoute(undefined, <Dashboard />)}
        {protectedRoute("/contacts", <Contacts />)}
        {protectedRoute("/open-houses/:id", <OpenHouse />)}
        {protectedRoute("/profile", <Profile />)}
        {protectedRoute("/projects", <Projects />)}
        {protectedRoute("/settings", <Settings />)}
        {protectedRoute("/tasks", <Tasks />)}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {protectedRoute("/graphiql", <GraphiQLPage />)}

        <Route path="/admin">
          {protectedRoute("open-houses", <AdminOpenHouses />)}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <AuthVerify logout={handleLogout} />
    </>
  );
};

export default App;
