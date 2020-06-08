import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import SongsList from "../../components/SongsList";

const Songs = () => {
  return (
    <Container>
      <Styled.Songs className="page">
        <SongsList />
      </Styled.Songs>
    </Container>
  );
};

export default Songs;
