import React from "react";
import Header from "./header";
import Main from "./main";
import Form from "../Form/form";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
