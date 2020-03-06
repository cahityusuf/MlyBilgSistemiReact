import React from "react";
//import Dashboard from "./Dashboard"
import { Container } from "reactstrap";
import Navigation from '../Navigation/Navigation'
//import RolesPages from "../Authorization/RolesPages";
import Router from "../../Router"

function App() {
  return (
    <div>
      <Container className="flex">
      <Navigation/>
      <br/>
        <Router/>
        </Container>    
    </div>
  );
}

export default App;
