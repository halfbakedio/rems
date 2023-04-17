import { ReactNode, useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@components/route/protected-route";

import { Page as AdminOpenHouses } from "~features/admin/open-houses";
import {
  LoginPage as Login,
  RegisterPage as Register,
} from "~features/auth";
import { Page as Contacts } from "~features/contacts";
import { Page as Dashboard } from "~features/dashboard";
import { Page as GraphiQL } from "~features/graphiql";
import { Page as OpenHouse } from "~features/open-house";
import { Page as Projects } from "~features/projects";
import { Page as Settings } from "~features/settings";
import { Page as Tasks } from "~features/tasks";
import { ProfilePage as Profile } from "~features/user";

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

        {protectedRoute("/graphiql", <GraphiQL />)}

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
