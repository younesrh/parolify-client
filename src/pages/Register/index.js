import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";

const Register = () => {
  return (
    <Container>
      <Styled.Register className="page">
        <Typography variant="h4" className="hero-title">
          Register
        </Typography>
      </Styled.Register>
    </Container>
  );
};

export default Register;
