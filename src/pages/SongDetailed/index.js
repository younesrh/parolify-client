import React, { useState } from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { Styled } from "./style";
import { useParams, useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { useEffect } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { ReactComponent as DownloadIconSvg } from "../../assets/icons/bx-cloud-download.svg";

const SongDetailed = () => {
  const { id } = useParams();
  const { songs } = useContext(DataContext);
  const [selectedSong, setSelectedSong] = useState();
  const [stars, setStars] = useState();

  useEffect(() => {
    setSelectedSong(songs.find((song) => song.id === id) || null);
    if (selectedSong) {
      setStars(selectedSong.rating);
    }
  }, []);

  useEffect(() => {
    if (selectedSong) {
      setStars(selectedSong.rating);
    }
  }, [selectedSong]);

  return (
    <>
      {selectedSong ? (
        <Styled.SongDetailed className="page">
          <div className="song-cover">
            <img
              src={`http://localhost:3001/${selectedSong.coverImage}`}
              alt="Cover"
            />
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
                <source
                  src={`http://localhost:3001/${selectedSong.videoUrl}`}
                />
              </Player>
            </div>
            <div className="download">
              <Button
                variant="contained"
                color="secondary"
                href={`http://localhost:3001/${selectedSong.videoUrl}`}
                download
                target="_blank"
                endIcon={<DownloadIconSvg style={{ fill: "white" }} />}
              >
                Download clip
              </Button>
            </div>
            <div className="lyrics">
              <Typography varinat="body1">{selectedSong.lyrics}</Typography>
            </div>
          </Container>
        </Styled.SongDetailed>
      ) : (
        <Typography variant="body2">Loading...</Typography>
      )}
    </>
  );
};

export default SongDetailed;
