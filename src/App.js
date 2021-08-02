import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import CharactersPage from "./views/CharactersPage/CharactersPage";
import LocationsPage from "./views/LocationsPage/LocationsPage";
import EpisodesPage from "./views/EpisodesPage/EpisodesPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/episode">
          <EpisodesPage />
        </Route>
        <Route exact path="/location">
          <LocationsPage />
        </Route>
        <Route exact path="/character">
          <CharactersPage />
        </Route>
        <Route path="/">
          <Redirect from="/" to="/character" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
