import React, { useEffect } from "react";
import "./App.css";

import { Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";
import ThemeProvider from "./style/ThemeProvider";
import { themeObject } from "./style/theme";
import Footer from "./components/Footer";
import SongDetailed from "./pages/SongDetailed";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={themeObject}>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/songs-list" component={Songs} />
        <Route exact path="/songs/:id" component={SongDetailed} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
