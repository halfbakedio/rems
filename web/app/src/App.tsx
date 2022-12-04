import { Route, Routes } from "react-router-dom";

import { Layout } from "@components/layout";

// import { Login, Profile, Register } from "@pages";
import Login from "@pages/login";
import Profile from "@pages/profile";
import Register from "@pages/register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default App;
