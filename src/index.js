import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components";
import HomePage from "views/HomePage/HomePage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage";
import ChampionDetail from "views/ChampionPages/ChampionDetail";
import ChampionList from "views/ChampionPages/ChampionList";
import SkillDetail from "views/SkillPages/SkillDetail";
import SkillList from "views/SkillPages/SkillList";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/skill/:id" component={SkillDetail} />
      <Route path="/skills" component={SkillList} />
      <Route path="/champ/:id" component={ChampionDetail} />
      <Route path="/champions" component={ChampionList} />
      <Route path="/champs" component={ChampionList} />
      <Route path="/champ" component={ChampionList} />
      <Route path="/components" component={Components} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
