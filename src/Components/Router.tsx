import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

const AppRouter = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

export default AppRouter;
