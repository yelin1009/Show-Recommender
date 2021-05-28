import React from "react";
import Header from "./header";
import Main from "./main";
import { Switch, Route } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
