import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { Styled } from "./style";
import { Container, IconButton } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import useScroll from "react-use-scroll";
import { ReactComponent as ArrowLeft } from "../../assets/icons/bx-left-arrow-alt.svg";

const Navbar = () => {
  const location = useLocation();

  const [isDetailedSong, setDetailedSong] = useState(false);
  const [isMoving, setMoving] = useState(false);

  const scroll = useScroll();

  useEffect(() => {
    if (scroll > 0) {
      setMoving(true);
    } else {
      setMoving(false);
    }
  }, [scroll]);

  useEffect(() => {
    if (location.pathname.startsWith("/songs/")) {
      setDetailedSong(true);
    } else {
      setDetailedSong(false);
    }
  }, [location]);

  return (
    <Styled.Navbar className={`${isMoving ? "--moving" : null}`}>
      <Container
        className={`navbar-inner ${isDetailedSong ? "--detailed" : null} `}
      >
        <div className="logo">
          <Link to="/">
            <LogoSvg />
          </Link>
        </div>
        <div className="menu">
          <ul>
            {isDetailedSong ? (
              <li>
                <Link to="/songs-list">
                  <IconButton className="arrow-button">
                    <ArrowLeft />
                  </IconButton>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/songs-list">
                    Song list
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </Styled.Navbar>
  );
};

export default Navbar;
