import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
