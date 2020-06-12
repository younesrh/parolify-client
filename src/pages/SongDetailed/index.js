import React, { useState } from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import { useParams } from "react-router-dom";
import songs from "../../components/SongsList/data";
import Rating from "@material-ui/lab/Rating";

const SongDetailed = () => {
  const { id } = useParams();
  const selectedSong = songs.find((song) => song.id === id);

  console.log(selectedSong);

  const [stars, setStars] = useState(selectedSong.rating);

  return (
    <>
      <Styled.SongDetailed className="page">
        <div className="song-cover">
          <img src={selectedSong.coverImage} alt="Cover" />
        </div>
        <Container>
          <div className="ratings">
            <Typography variant="body2">
              {selectedSong.ratingsNumber} {`(${selectedSong.rating})`}
            </Typography>
            <Rating
              name="simple-controlled"
              value={stars}
              precision={0.1}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
              size="large"
            />
          </div>
          <Typography variant="h3">{selectedSong.songName}</Typography>
          <div className="lyrics">
            <Typography varinat="body1">{selectedSong.lyrics}</Typography>
          </div>
        </Container>
      </Styled.SongDetailed>
    </>
  );
};

export default SongDetailed;
