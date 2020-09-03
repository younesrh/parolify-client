import React, { useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import SongItem from "../SongItem";
// import songsData from "./data";
import { useContext } from "react";
import { DataContext } from "../../context/data-context";

const SongsList = ({ songs }) => {
  return (
    <Container>
      <Styled.SongsList className="page">
        {songs.length > 0
          ? songs.map((song) => <SongItem {...song} key={song.id} />)
          : songs.length === 0
          ? "No songs found in database."
          : "Fetching songs"}
      </Styled.SongsList>
    </Container>
  );
};

export default SongsList;
