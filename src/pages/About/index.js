import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Styled } from './style';

const About = () => {
  return (
    <Container>
      <Styled.About className='page'>
        <Typography variant='h6'>Parolify - About.</Typography>
        <Typography variant='body1'>
          Parolify.com is a comprehensive online lyrics resource, and a vibrant
          music fans community, featuring hundred of thousands lyrics and albums
          information from endless artists.
        </Typography>
      </Styled.About>
    </Container>
  );
};

export default About;
