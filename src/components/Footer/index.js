import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { Styled } from "./style";

const Footer = () => {
  return (
    <Container>
      <Styled.Footer>
        <div className="copyright">
          <Typography variant="body2">
            Parolify - All rights reserved © 2020
          </Typography>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/terms">
                <Typography variant="body2">Terms and conditions</Typography>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Typography variant="body2">About</Typography>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Typography variant="body2">Contact us</Typography>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Typography variant="body2">Help </Typography>
              </Link>
            </li>
          </ul>
        </div>
      </Styled.Footer>
    </Container>
  );
};

export default Footer;
