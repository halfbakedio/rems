import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
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

  // TODO: redirect to dashboard if already logged in
  // TODO: display loading state
  // TODO: display error message in notification or toast when login fails

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (values: { email: string, password: string }) => {
    setMessage("");
    setLoading(true);

    AuthService.login(values.email, values.password).then(
      () => {
        navigate("/");
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
    <div className="py-20">
      <Card className="w-96 mx-auto shadow-2xl">
        <CardHeader
          variant="gradient"
          color="cyan"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form noValidate onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label={errors.email && touched.email ? errors.email : "Email"}
              size="lg"
              type="email"
              name="email"
              error={errors.email != undefined && touched.email != undefined}
              onChange={handleChange}
              value={values.email}
            />

            <Input
              label={errors.password && touched.password ? errors.password : "Password"}
              size="lg"
              type="password"
              name="password"
              error={errors.password != undefined && touched.password != undefined}
              onChange={handleChange}
              value={values.password}
            />
          </CardBody>
          <CardFooter className="pt-0 flex flex-col gap-4">
            <Button variant="gradient" color="blue" type="submit" fullWidth>
              Sign In
            </Button>
            <Button variant="gradient" color="red" onClick={handleReset} fullWidth>
              Reset
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="register"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
