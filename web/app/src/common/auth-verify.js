import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = (data == "undefined") ? undefined : JSON.parse(data);

    if (user && user.token) {
      const decodedJwt = parseJwt(user.token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        /* eslint-disable-next-line react/prop-types */
        props.logout();
      }
    }
  }, [location, props]);

  return <></>;
};

export default AuthVerify;
