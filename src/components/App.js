import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./AdminPage/AdminPage";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}>
          {/* <MainPage /> */}
        </Route>
        <Route path="/admin" component={AdminPage}>
          {/* <AdminPage /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
