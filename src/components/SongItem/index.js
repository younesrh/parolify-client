import React, { useState, useContext } from "react";
import { Styled } from "./style";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as TrashIconSvg } from "../../assets/icons/bx-trash.svg";
import { IconButton, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import Axios from "axios";
import { DataContext } from "../../context/data-context";

const SongItem = ({
  id,
  artistName,
  coverImage,
  videoUrl,
  songName,
  ratingsNumber,
  rating,
  lyrics,
}) => {
  const { currentUser, token } = useContext(AuthContext);
  const { songs, setSongs } = useContext(DataContext);

  const deleteSong = (id) => {
    Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/songs/delete`,
      {
        id: id,
      },
      {
        headers: {
          "auth-token": token,
        },
      }
    ).then((res) => {
      let newSongs = songs.filter((song) => song.id !== id);
      setSongs(newSongs);
      console.log(res);
    });
  };

  return (
    <Styled.SongItem>
      {currentUser.isAdmin && (
        <div className="delete-button">
          <IconButton color="primary" onClick={() => deleteSong(id)}>
            <TrashIconSvg style={{ fill: "red" }} />
          </IconButton>
        </div>
      )}
      <div className="image">
        <img src={`${coverImage}`} alt="Cover" />
      </div>
      <div className="info">
        <div className="header">
          <div className="song-name">
            <Typography variant="h6">{`${artistName} - ${songName}`}</Typography>
          </div>
          <div className="button">
            <Link to={`/songs/${id}`}>
              <IconButton>
                <ArrowRightIcon />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="rating">
          <div className="stars">
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.1}
              // disabled
              // onChange={(event, newValue) => {
              //   setStars(newValue);
              // }}
              size="small"
            />
          </div>
          <div className="numbers">
            <Typography variant="body2">
              {ratingsNumber} ({rating})
            </Typography>
          </div>
        </div>
        <div className="lyrics-preview">
          <Typography variant="body2">
            {`${lyrics.substring(0, 175)}...`}
          </Typography>
        </div>
      </div>
    </Styled.SongItem>
  );
};

export default SongItem;
