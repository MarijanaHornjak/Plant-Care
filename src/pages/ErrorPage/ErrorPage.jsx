import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorimg from "../../assets/undraw_Page_not_found_re_e9o6.png";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className="error-section">
        <img src={errorimg} alt="error" />
        <h3>Something went wrong!</h3>

        <Link to="/">HomePage</Link>
      </section>
    );
  }
  return (
    <section>
      <h1>Error</h1>
    </section>
  );
};

export default ErrorPage;
