import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <h1>{error.status}</h1>;
};

export default ErrorPage;
