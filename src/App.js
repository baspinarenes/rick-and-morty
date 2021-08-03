import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import CharactersPage from "./views/CharactersPage/CharactersPage";
import LocationsPage from "./views/LocationsPage/LocationsPage";
import EpisodesPage from "./views/EpisodesPage/EpisodesPage";

import "./App.scss";

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path="/episode">
          <EpisodesPage />
        </Route>
        <Route path="/location">
          <LocationsPage />
        </Route>
        <Route path="/character">
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
