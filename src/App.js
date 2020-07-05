import React, { useEffect } from "react";
import "./App.css";

import { Route, useLocation, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";
import ThemeProvider from "./style/ThemeProvider";
import { themeObject } from "./style/theme";
import Footer from "./components/Footer";
import SongDetailed from "./pages/SongDetailed";
import { ProtectedRoute } from "./routes";
import Login from "./pages/Login";
import Register from "./pages/Register";

const apiUrl = "http://localhost:3001";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/login" component={Login} />
          <ProtectedRoute exact path="/register" component={Register} />
          <Route exact path="/songs-list" component={Songs} />
          <Route exact path="/songs/:id" component={SongDetailed} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
