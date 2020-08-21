import React from "react";
import { Container } from "@material-ui/core";
import { Styled } from "./style";
import SongsList from "../../components/SongsList";
import { useParams } from "react-router-dom";

const ArtistSongs = () => {
  const { artist } = useParams();
  return (
    <Container>
      <Styled.ArtistSongs className="page">
        <SongsList search={artist} />
      </Styled.ArtistSongs>
    </Container>
  );
};

export default ArtistSongs;
