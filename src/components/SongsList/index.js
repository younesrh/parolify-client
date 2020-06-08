import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import SongItem from "../SongItem";
import songsData from "./data";

const SongsList = () => {
  return (
    <Container>
      <Styled.SongsList className="page">
        {songsData.map((song) => (
          <SongItem {...song} key={song.id} />
        ))}
      </Styled.SongsList>
    </Container>
  );
};

export default SongsList;
