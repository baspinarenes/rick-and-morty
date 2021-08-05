import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CharactersPage from "../../views/CharactersPage/CharactersPage";
import LocationsPage from "../../views/LocationsPage/LocationsPage";
import EpisodesPage from "../../views/EpisodesPage/EpisodesPage";
import NotFoundPage from "../../views/NotFoundPage/NotFoundPage";
import DetailPage from "../../views/DetailPage/DetailPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect exact from="/" to="/character" />
      </Route>
      <Route exact path="/character/:id">
        <DetailPage path="character" />
      </Route>
      <Route exact path="/character" component={CharactersPage} />
      <Route exact path="/location/:id">
        <DetailPage path="location" />
      </Route>
      <Route exact path="/location" component={LocationsPage} />
      <Route exact path="/episode/:id">
        <DetailPage path="episode" />
      </Route>
      <Route exact path="/episode" component={EpisodesPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}

export default Routes;
