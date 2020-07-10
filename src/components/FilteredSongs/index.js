import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { Styled } from "./style";
import SongItem from "../SongItem";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/data-context";

const FilteredSongs = ({ search }) => {
  const { songs } = useContext(DataContext);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    setFilteredSongs(
      songs.filter(
        (song) =>
          `${song.artistName} - ${song.songName}`
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim()) ||
          song.lyrics.toLowerCase().includes(search.toLowerCase().trim())
      )
    );
  }, [search]);

  return (
    <Container>
      <Styled.FilteredSongs className="page">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => <SongItem {...song} key={song.id} />)
        ) : (
          <Typography variant="body2">No songs found!</Typography>
        )}
      </Styled.FilteredSongs>
    </Container>
  );
};

export default FilteredSongs;
