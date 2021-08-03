import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CharactersPage from "../../views/CharactersPage/CharactersPage";
import LocationsPage from "../../views/LocationsPage/LocationsPage";
import EpisodesPage from "../../views/EpisodesPage/EpisodesPage";
import NotFoundPage from "../../views/NotFoundPage/NotFoundPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect exact from="/" to="/character" />
      </Route>
      <Route exact path="/character" component={CharactersPage} />
      <Route exact path="/location" component={LocationsPage} />
      <Route exact path="/episode" component={EpisodesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
