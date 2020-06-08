import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";

const SongsList = () => {
  return (
    <Container>
      <Styled.SongsList className="page">
        <Typography variant="h4" className="hero-title">
          Welcome to <span className="text-highlight">Parolify</span>, the best
          lyrics app out there.
        </Typography>
        <div className="search-placeholder"></div>
        <div className="illustration">
          <IllustrationSvg />
        </div>
      </Styled.SongsList>
    </Container>
  );
};

export default SongsList;
