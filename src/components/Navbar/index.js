import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { Styled } from "./style";
import { Container } from "@material-ui/core";

const Navbar = () => {
  return (
    <Container>
      <Styled.Navbar>
        <div className="logo">
          <Link to="/">
            <LogoSvg />
          </Link>
        </div>
        <div className="menu">
          <ul>
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
          </ul>
        </div>
      </Styled.Navbar>
    </Container>
  );
};

export default Navbar;
