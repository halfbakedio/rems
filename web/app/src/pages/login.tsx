import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import AuthService from "@services/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (values: { email: string, password: string }) => {
    setMessage("");
    setLoading(true);

    AuthService.login(values.email, values.password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error: any) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      },
    );
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: handleLogin,
  });

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className={
              "form-control" +
              (errors.email && touched.email ? " is-invalid" : "")
            }
            onChange={handleChange}
            value={values.email}
          />
          <div className="invalid-feedback">
            {errors.email && touched.email ? errors.email : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className={
              "form-control" +
              (errors.password && touched.password ? " is-invalid" : "")
            }
            onChange={handleChange}
            value={values.password}
          />
          <div className="invalid-feedback">
            {errors.password && touched.password ? errors.password : null}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-warning float-right"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
