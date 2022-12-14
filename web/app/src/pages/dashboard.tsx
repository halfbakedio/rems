import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "@components/layout";
import AuthService from "@services/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {currentUser && (
        <Layout>
          <div className="container">Hi</div>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
