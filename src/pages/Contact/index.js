import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Styled } from './style';

const Contact = () => {
  return (
    <Container>
      <Styled.Contact className='page'>
        <Typography variant='h6'>Parolify - Contact.</Typography>
        <Typography variant='body1'>
          Send us your suggestions, comments and concerns by sending us an email
          at support@parolify.com. Please keep in mind that while we do review
          all emails that come in, we can't respond to every one of them.
        </Typography>
      </Styled.Contact>
    </Container>
  );
};

export default Contact;
