import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, tokenSuccess, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (tokenSuccess.isAuthenticated === true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
