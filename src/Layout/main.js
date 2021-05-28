import "./layout.css";
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <section>
      <div>
        <Link to="/form" class="btn">
          Start Here
        </Link>
      </div>
    </section>
  );
}

export default Main;
