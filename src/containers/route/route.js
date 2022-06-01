import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "../test/demo";

class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Demo} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
