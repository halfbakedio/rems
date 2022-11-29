import { parse, serialize } from "cookie";

// type Domain = {
//   maindomain: string,
// };

const fetcher = url => axios.get(url).then(res => res.data);

// TODO
const getDomain = (origin: string) => {
  return origin;
};

// TODO
const getSubdomain = (origin: string) => {
  return { maindomain: origin };
};

export const serializeCookie = (name, value, req, options = {}) => {
  const { origin } = req.headers;
  const domain = origin ? getDomain(origin) : null;
  const { maindomain } = domain ? getSubdomain(domain) : { maindomain: null };

  return serialize(name, String(value), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production" ? true : false,
    path: "/",
    domain: maindomain ? "." + maindomain : null,
    ...options,
  });
};

export const getCookie = (req, name) => {
  const cookieData = parse(req.headers.cookie || "");
  
  if (cookieData && cookieData[name]) {
    return cookieData[name];
  }

  return null;
};

export const login = (req, res) => {
  const { body } = req;
  return Api.post(BACKEND_SIGN_IN, body)
    .then((data) => {
      res.setHeader(
        "Set-Cookie",
        serializeCookie(HN_SESSION_KEY, data.token, req, {}),
      );
      return res.json(data);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
 
export const signup = (req, res) => {
  const { body } = req;
  return Api.post(BACKEND_SIGN_UP, body)
    .then((data) => {
      res.setHeader(
        "Set-Cookie",
        serializeCookie(HN_SESSION_KEY, data.token, req, {}),
      );
      return res.json(data);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const signout = (req, res) => {
  res.setHeader(
    "Set-Cookie",
    serializeCookie(HN_SESSION_KEY, "", req, { maxAge: 0 }),
  );
  res.status(200).json({ success: true });
};
