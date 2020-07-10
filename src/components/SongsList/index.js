import React, { useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import SongItem from "../SongItem";
import songsData from "./data";
import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import Axios from "axios";

const SongsList = () => {
  const { songs } = useContext(DataContext);

  return (
    <Container>
      <Styled.SongsList className="page">
        {songs.length > 0 &&
          songs.map((song) => <SongItem {...song} key={song.id} />)}
      </Styled.SongsList>
    </Container>
  );
};

export default SongsList;
