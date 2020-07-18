import React, { useState } from 'react';
import { Styled } from './style';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';
import { IconButton, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

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
  return (
    <Styled.SongItem>
      <div className='image'>
        <img src={`http://localhost:3001/${coverImage}`} alt='Cover' />
      </div>
      <div className='info'>
        <div className='header'>
          <div className='song-name'>
            <Typography variant='h6'>{`${artistName} - ${songName}`}</Typography>
          </div>
          <div className='button'>
            <Link to={`/songs/${id}`}>
              <IconButton>
                <ArrowRightIcon />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className='rating'>
          <div className='stars'>
            <Rating
              name='simple-controlled'
              value={rating}
              precision={0.1}
              // disabled
              // onChange={(event, newValue) => {
              //   setStars(newValue);
              // }}
              size='small'
            />
          </div>
          <div className='numbers'>
            <Typography variant='body2'>
              {ratingsNumber} ({rating})
            </Typography>
          </div>
        </div>
        <div className='lyrics-preview'>
          <Typography variant='body2'>
            {`${lyrics.substring(0, 175)}...`}
          </Typography>
        </div>
      </div>
    </Styled.SongItem>
  );
};

export default SongItem;
