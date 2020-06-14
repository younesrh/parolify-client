import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Styled } from "./style";
import { ReactComponent as IllustrationSvg } from "../../assets/svg/home-illustration.svg";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <Container>
      <Styled.Home className="page">
        <Typography variant="h4" className="hero-title">
          Welcome to <span className="text-highlight">Parolify</span>, the best
          lyrics app out there.
        </Typography>
        <SearchBar />
        <div className="illustration">
          <IllustrationSvg />
        </div>
      </Styled.Home>
    </Container>
  );
};

export default Home;
