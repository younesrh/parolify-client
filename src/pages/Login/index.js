import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";

const Login = () => {
  return (
    <Container>
      <Styled.Login className="page">
        <Typography variant="h4" className="hero-title">
          Login
        </Typography>
      </Styled.Login>
    </Container>
  );
};

export default Login;
