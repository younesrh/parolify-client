import React, { useContext } from "react";
import {
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Button,
  CircularProgress,
  Checkbox,
} from "@material-ui/core";
import { Styled } from "./style";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const history = useHistory();
  const { token, setToken, currentUser } = useContext(AuthContext);

  if (token && currentUser) {
    history.push("/");
  }

  return (
    <Container>
      <Styled.Login className="page">
        <Typography variant="h4" className="hero-title">
          Login
        </Typography>
        <div className="form">
          <Formik
            // validationSchema={vSchema}
            validateOnMount={true}
            initialValues={{
              email: "",
              password: "",
              remember: false,
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              setSubmitting(true);

              axios
                .post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
                  email: values.email,
                  password: values.password,
                })
                .then((res) => {
                  localStorage.setItem("auth-token", JSON.stringify(res.data));
                  setToken(res.data);
                  setSubmitting(false);
                  // history.push("/");
                })
                .catch((err) => {
                  console.error(err);
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
            }) => (
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  label="Email"
                  error={touched.email && errors.email ? true : false}
                  variant="filled"
                />
                {touched.email && errors.email ? (
                  <ErrorMessage name="email" />
                ) : null}
                <TextField
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  label="Password"
                  error={touched.password && errors.password ? true : false}
                  variant="filled"
                />
                {touched.password && errors.password ? (
                  <ErrorMessage name="password" />
                ) : null}

                <div className="form-controlers">
                  <FormControlLabel
                    className="remember-checkbox"
                    control={
                      <Checkbox
                        checked={values.remember}
                        onChange={handleChange}
                        name="remember"
                        value="remember"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || !isValid}
                  >
                    Login
                    {isSubmitting && (
                      <CircularProgress
                        style={{ marginInlineStart: "16px" }}
                        size={20}
                      />
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Styled.Login>
    </Container>
  );
};

export default Login;
