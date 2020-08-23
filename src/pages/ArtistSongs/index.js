import React from "react";
import { Container } from "@material-ui/core";
import { Styled } from "./style";
import { useParams } from "react-router-dom";
import FilteredSongs from "../../components/FilteredSongs";

const ArtistSongs = () => {
  const { artist } = useParams();
  return (
    <Container>
      <Styled.ArtistSongs className="page">
        <FilteredSongs search={artist} />
      </Styled.ArtistSongs>
    </Container>
  );
};

export default ArtistSongs;
