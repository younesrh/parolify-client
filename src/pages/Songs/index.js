import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";

const Songs = () => {
  return (
    <Container>
      <Styled.Songs className="page">
        <Typography variant="h4" className="hero-title">
          Songs
        </Typography>
      </Styled.Songs>
    </Container>
  );
};

export default Songs;
