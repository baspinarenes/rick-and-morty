import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import Routes from "./components/Routes/Routes";

import "./App.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageHeader />
      <Routes />
    </Router>
  );
}

export default App;
