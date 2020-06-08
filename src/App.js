import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./pages/Home";
import SongsList from "./pages/SongsList";
import Navbar from "./components/Navbar";
import ThemeProvider from "./style/ThemeProvider";
import { themeObject } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/songs-list" component={SongsList} />
      </div>
    </ThemeProvider>
  );
}

export default App;
