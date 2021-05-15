import Home from "./pages/Home";
import MyBajsklumps from "./pages/MyBajsklumps";
import GetStarted from "./pages/GetStarted";
import Users from "./pages/Users";
import ThemeSwitch from "./components/ThemeSwitch";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/style.css";
import { keepTheme } from "./utils/theme";
// import LanguageSwitch from "./components/LanguageSwitch";

export default function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar">
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/get-started">Get started</Link>
            </div>
            <div className="nav-link">
              <Link to="/my-bajsklumps">My bajsklumps</Link>
            </div>
            <div className="nav-link">
              <Link to="/users">Users</Link>
            </div>
            <ThemeSwitch />
            {/* <LanguageSwitch /> */}
          </div>
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
