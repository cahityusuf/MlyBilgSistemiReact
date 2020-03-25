import React from "react";
//import Dashboard from "../Root/Dashboard"
import Login from "../Authantication/SignInSide"
import { connect } from "react-redux";
import AppBar from "../Navigation/AppBar";
import TreeView from "../Navigation/TreeView";


function App({tokenSuccess}) {
  
      if (!tokenSuccess.isAuthenticated) {
          return (<div><Login/></div>)
        } else{
          return (<div><AppBar/><TreeView/></div>)
          // return (<div><Dashboard/></div>)
          // return (<div><Router/></div>)
        } 
 
}

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer
  };
}

export default connect(mapStateToProps)(App);
