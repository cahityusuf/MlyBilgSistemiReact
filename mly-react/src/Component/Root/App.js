import React from "react";
//import Navigation from "../Navigation/Navigation";

//import Dashboard from "./Dashboard"
import { Container } from "reactstrap";
//import RolesPages from "../Authorization/RolesPages";
import RolesPages from "../Authorization/RolesPages";

function App() {
  return (
    <div>
      <Container className="flex"><RolesPages/></Container>    
    </div>
  );
}

export default App;
