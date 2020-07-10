import React, { useState } from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import { useParams, useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { useEffect } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import { useContext } from "react";
import { DataContext } from "../../context/data-context";

const SongDetailed = () => {
  const { id } = useParams();
  const { songs } = useContext(DataContext);
  const selectedSong = songs.find((song) => song.id === id);

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
          <Typography variant="h3">{`${selectedSong.artistName} - ${selectedSong.songName}`}</Typography>
          <div className="video">
            <Player>
              <source src={selectedSong.videoUrl} />
            </Player>
          </div>
          <div className="lyrics">
            <Typography varinat="body1">{selectedSong.lyrics}</Typography>
          </div>
        </Container>
      </Styled.SongDetailed>
    </>
  );
};

export default SongDetailed;
