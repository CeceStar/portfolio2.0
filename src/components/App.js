import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dataBase from "../assets/data/firebase.config";
import AdminPage from "./AdminPage/AdminPage";
import MainPage from "./MainPage/MainPage";

function App() {
  let [allPosts, setAllPosts] = useState([]);

  function fetchBlogs() {
    let getallPosts = dataBase.collection("posts");
    getallPosts
      .get()
      .then((doc) => {
        let posts = doc.docs
          .map((doc) => {
            return {
              id: doc.id,
              date: doc.data().date,
              heading: doc.data().heading,
              text: doc.data().text,
            };
          })
          .sort((a, b) => {
            return b.date - a.date;
          });
        setAllPosts(posts);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage allPosts={allPosts} />
        </Route>
        <Route path="/admin">
          <AdminPage allPosts={allPosts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
