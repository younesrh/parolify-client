import React, { useContext } from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import SongsList from "../../components/SongsList";
import { DataContext } from "../../context/data-context";

const Songs = () => {
  const { songs } = useContext(DataContext);
  return (
    <Container>
      <Styled.Songs className="page">
        <SongsList songs={songs} />
      </Styled.Songs>
    </Container>
  );
};

export default Songs;
