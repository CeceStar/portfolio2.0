import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./AdminPage/AdminPage";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
