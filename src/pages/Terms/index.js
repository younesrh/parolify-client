import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Styled } from './style';

const Terms = () => {
  return (
    <Container>
      <Styled.Terms className='page'>
        <Typography variant='h6'>Copyrights and Trademarks</Typography>
        <Typography variant='body1'>
          All materials contained on the Web Site (unless specifically specified
          otherwise) are Copyright 2020, STANDS4 LLC. All rights reserved. No
          person is authorized to use, copy or distribute any portion the Web
          Site including related graphics. STANDS4 LLC and other trademarks
          and/or service marks (including logos and designs) found on the Web
          Site are trademarks/service marks that identify STANDS4 LLC and the
          goods and/or services provided by STANDS4 LLC. Such marks may not be
          used under any circumstances without the prior written authorization
          of STANDS4 LLC. You may not modify, publish, transmit, participate in
          the transfer or sale, create derivative works, or in any way exploit
          any of the content of this site, in whole or in part. This website is
          protected from content theft by both passive and active components.
          Any copyright infringements of the website content and other
          copyrighted material will result in prosecution according to the
          international copyright law and the Digital Millennium Copyright Act
          (DCMA).
        </Typography>
        <Typography variant='h6'>Contributions to the Web Site</Typography>
        <Typography variant='body1'>
          Where you are invited to submit any contribution to the Web Site
          (including any text, photographs, graphics, video or audio) you agree,
          by submitting your contribution, to grant STANDS4 LLC a perpetual,
          royalty-free, non-exclusive, sub-licensable right and license to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, perform, play, make available to the public, and
          exercise all copyright and publicity rights with respect to your
          contribution worldwide and/or to incorporate your contribution in
          other works in any media now known or later developed for the full
          term of any rights that may exist in your contribution. If you do not
          want to grant to STANDS4 LLC the rights set out above, please do not
          submit your contribution. You are solely responsible for any content
          you publish on the Web Site, and the consequences of publishing such
          content. You agree to indemnify, defend, and hold harmless STANDS4
          LLC, its officers, directors, employees, and agents from and against
          any and all claims, losses, costs, liabilities, damages, judgments,
          penalties, interest and expenses arising out or relating to any
          intellectual property or proprietary rights by any content or other
          information you publish to the Web Site. To the extent you own rights
          in any content you publish on the Web Site, such rights shall remain
          yours solely and exclusively.
        </Typography>
        <Typography variant='h6'>Links to Third-Party Web Sites</Typography>
        <Typography variant='body1'>
          STANDS4 LLC may provide hyperlinks to third-party web sites as a
          convenience to users of the Web Site. STANDS4 LLC, LLC does not
          control third-party web sites and is not responsible for the contents
          of any linked-to, third-party web sites or any hyperlink in a
          linked-to web site. STANDS4 LLC does not endorse, recommend or approve
          any third-party web site hyperlinked from the Web Site. STANDS4 LLC
          will have no liability to any entity for the content or use of the
          content available through such a hyperlink.
        </Typography>
        <Typography variant='h6'>
          No Representations or Warranties; Limitations on Liability
        </Typography>
        <Typography variant='body1'>
          The information and materials on the Web Site could include technical
          inaccuracies or typographical errors. Changes are periodically made to
          the information contained herein. STANDS4 LLC MAKES NO REPRESENTATIONS
          OR WARRANTIES WITH RESPECT TO ANY INFORMATION, MATERIALS OR GRAPHICS
          ON THE WEB SITE, ALL OF WHICH IS PROVIDED ON A STRICTLY "AS IS" BASIS,
          WITHOUT WARRANTY OF ANY KIND AND HEREBY EXPRESSLY DISCLAIMS ALL
          WARRANTIES WITH REGARD TO ANY INFORMATION, MATERIALS OR GRAPHICS ON
          THE WEB SITE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. UNDER NO
          CIRCUMSTANCES SHALL THE SITE OWNER OR PUBLISHER BE LIABLE UNDER ANY
          THEORY OF RECOVERY, AT LAW OR IN EQUITY, FOR ANY DAMAGES, INCLUDING
          WITHOUT LIMITATION, SPECIAL, DIRECT, INCIDENTAL, CONSEQUENTIAL OR
          PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO LOSS OF USE OR LOST
          PROFITS), ARISING OUT OF OR IN ANY MANNER CONNECTED WITH THE USE OF
          INFORMATION OR SERVICES, OR THE FAILURE TO PROVIDE INFORMATION OR
          SERVICES, FROM THE WEB SITE.
        </Typography>
      </Styled.Terms>
    </Container>
  );
};

export default Terms;
