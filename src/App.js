import Home from "./pages/Home";
import MyBajsklumps from "./pages/MyBajsklumps";
import GetStarted from "./pages/GetStarted";
import Users from "./pages/Users";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/get-started">Get started</Link>
            </li>
            <li>
              <Link to="/my-bajsklumps">My bajsklumps</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/get-started">
            <GetStarted />
          </Route>
          <Route path="/my-bajsklumps">
            <MyBajsklumps />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
