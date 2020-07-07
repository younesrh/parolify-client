import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!token ? <RouteComponent {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};
