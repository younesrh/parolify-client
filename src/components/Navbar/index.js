import React, { useContext } from "react";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { Styled } from "./style";
import { Container, IconButton, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import useScroll from "react-use-scroll";
import { ReactComponent as ArrowLeft } from "../../assets/icons/bx-left-arrow-alt.svg";
import { ReactComponent as SignOutIconSvg } from "../../assets/icons/bx-log-out-circle.svg";
import { AuthContext } from "../../context/auth-context";

const Navbar = () => {
  const { token, currentUser, setCurrentUser } = useContext(AuthContext);
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

  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  const logOut = () => {
    setCurrentUser(null);
    history.push("/login");
    localStorage.removeItem("auth-token");
  };

  return (
    <Styled.Navbar className={`${isMoving ? "--moving" : null}`}>
      <Container
        className={`navbar-inner ${isDetailedSong ? "--detailed" : null} `}
      >
        <div className="logo">
          <Link to="/">
            <LogoSvg />
          </Link>
          <div>
            {currentUser && <span>{`Hello ${currentUser.name}`}</span>}{" "}
            {currentUser && currentUser.isAdmin ? (
              <span className="admin">Admin</span>
            ) : null}
          </div>
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
                {currentUser ? (
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
                    <li>
                      <NavLink exact to="/songs-list/add">
                        <Button variant="contained">Add a song</Button>
                      </NavLink>
                    </li>
                    <li>
                      <IconButton
                        onClick={logOut}
                        color="primary"
                        size="medium"
                      >
                        <SignOutIconSvg
                          style={{ transform: "rotateY(180deg)" }}
                        />
                      </IconButton>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink exact to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/register">
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </Container>
    </Styled.Navbar>
  );
};

export default Navbar;
