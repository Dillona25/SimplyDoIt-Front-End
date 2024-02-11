import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={"/login"} />}
    </Route>
  );
};
