import React, { useState } from "react";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Styled } from "./style";
import { useParams, useHistory, Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { useEffect } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import { useContext } from "react";
import { DataContext } from "../../context/data-context";
import { ReactComponent as DownloadIconSvg } from "../../assets/icons/bx-cloud-download.svg";
import { AuthContext } from "../../context/auth-context";
import Axios from "axios";

const SongDetailed = () => {
  const { id } = useParams();
  // const { songs } = useContext(DataContext);
  const [selectedSong, setSelectedSong] = useState(null);
  const [stars, setStars] = useState();

  // useEffect(() => {
  //   setSelectedSong(songs.find((song) => song.id === id) || null);
  //   if (selectedSong) {
  //     setStars(selectedSong.rating);
  //   }
  // }, [selectedSong, id, songs]);

  const { token } = useContext(AuthContext);

  // Update views
  useEffect(() => {
    Axios.post(
      "http://localhost:3001/api/songs/update-views",
      {
        id: id,
      },
      {
        headers: {
          "auth-token": token,
        },
      }
    ).then((res) => {
      console.log(res);
      setSelectedSong(res.data);
    });

    return () => {
      setSelectedSong(null);
    };
  }, [id, token]);

  useEffect(() => {
    if (selectedSong) {
      setStars(selectedSong.rating);
    }

    return () => {
      setStars(0);
    };
  }, [selectedSong]);

  if (selectedSong === null) {
    return (
      <Styled.SongDetailed className="page">
        <div className="song-detailed-loading">
          <Typography variant="h6">Loading song...</Typography>
          <CircularProgress size={64} />
        </div>
      </Styled.SongDetailed>
    );
  }

  return (
    <>
      {selectedSong ? (
        <Styled.SongDetailed className="page">
          <div className="song-cover">
            <img
              src={`http://localhost:3001/${selectedSong.cover_image}`}
              alt="Cover"
            />
          </div>
          <Container>
            <div className="ratings">
              <Typography variant="body2">
                Views: {selectedSong.views + 1}. Ratings{" "}
                {`(${selectedSong.rating})`}
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
            <Typography variant="h3">
              <Link to={`/artists/${selectedSong.artist_name}`}>
                {selectedSong.artist_name}
              </Link>{" "}
              - {selectedSong.song_name}
            </Typography>
            <div className="video">
              <Player>
                <source
                  src={`http://localhost:3001/${selectedSong.video_url}`}
                />
              </Player>
            </div>
            <div className="download">
              <Button
                variant="contained"
                color="secondary"
                href={`http://localhost:3001/${selectedSong.video_url}`}
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
