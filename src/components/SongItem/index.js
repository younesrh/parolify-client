import React, { useState } from "react";
import { Styled } from "./style";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import { IconButton, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const SongItem = ({
  id,
  artistName,
  coverImage,
  songName,
  ratingsNumber,
  rating,
  lyrics,
}) => {
  // const [stars, setStars] = useState(rating);
  return (
    <Styled.SongItem>
      <div className="image">
        <img src={coverImage} alt="Cover" />
      </div>
      <div className="info">
        <div className="header">
          <div className="song-name">
            <Typography variant="h6">{songName}</Typography>
          </div>
          <div className="button">
            <IconButton>
              <ArrowRightIcon />
            </IconButton>
          </div>
        </div>
        <div className="rating">
          <div className="stars">
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.1}
              disabled
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
