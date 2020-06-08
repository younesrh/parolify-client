import React from "react";
import { Typography, Container, formatMs } from "@material-ui/core";
import { Styled } from "./style";
const Home = () => {
  return (
    <Container>
      <Styled.Home>
        <Typography variant="h4" className="hero-title">
          Welcome to Parolify, the best lyrics app out there.
        </Typography>
      </Styled.Home>
    </Container>
  );
};

export default Home;
