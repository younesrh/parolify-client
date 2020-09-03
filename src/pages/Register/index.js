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

const Register = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    history.push("/");
  }

  return (
    <Container>
      <Styled.Register className="page">
        <Typography variant="h4" className="hero-title">
          Register
        </Typography>
        <div className="form">
          <Formik
            // validationSchema={vSchema}
            validateOnMount={true}
            initialValues={{
              email: "",
              name: "",
              password: "",
              agreed: false,
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              setSubmitting(true);

              axios
                .post(`${process.env.REACT_APP_SERVER_URL}/api/auth/signup`, {
                  email: values.email,
                  name: values.name,
                  password: values.password,
                })
                .then((res) => {
                  console.log(res);
                  history.push("/login");
                })
                .catch((err) => console.error(err));
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
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  label="Name"
                  error={touched.name && errors.name ? true : false}
                  variant="filled"
                />
                {touched.name && errors.name ? (
                  <ErrorMessage name="name" />
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
                        checked={values.agree}
                        onChange={handleChange}
                        name="agree"
                        value="agree"
                        color="primary"
                      />
                    }
                    label="I agree on the terms!"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || !isValid}
                  >
                    Register
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
      </Styled.Register>
    </Container>
  );
};

export default Register;
