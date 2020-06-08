import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";
import ThemeProvider from "./style/ThemeProvider";
import { themeObject } from "./style/theme";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/songs-list" component={Songs} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
