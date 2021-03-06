import React, { useEffect, useContext } from "react";
import "./app-style.js";

import {
  Route,
  useLocation,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./style/theme";
import Footer from "./components/Footer";
import SongDetailed from "./pages/SongDetailed";
import { ProtectedRoute } from "./routes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider, AuthContext } from "./context/auth-context";
import axios from "axios";
import SongAdder from "./pages/SongAdder";
import { Styled } from "./app-style.js";
import { ThemeProvider } from "./context/theme-context.js";
import ArtistSongs from "./pages/ArtistSongs/index.js";
import Terms from "./pages/Terms/index.js";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";

function App() {
  const location = useLocation();
  const { token, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/auth`, {
          headers: {
            "auth-token": token,
          },
        })
        .then((res) => {
          setCurrentUser(res.data);
        });
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Styled.App>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <ProtectedRoute exact path="/songs-list" component={Songs} />
          <ProtectedRoute exact path="/songs-list/add" component={SongAdder} />
          <ProtectedRoute exact path="/songs/:id" component={SongDetailed} />
          <ProtectedRoute
            exact
            path="/artists/:artist"
            component={ArtistSongs}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Styled.App>
    </ThemeProvider>
  );
}

export default App;
