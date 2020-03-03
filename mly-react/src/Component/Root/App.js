import React from "react";
//import Navigation from "../Navigation/Navigation";

//import Dashboard from "./Dashboard"
import { Container } from "reactstrap";
//import RolesPages from "../Authorization/RolesPages";
import NewRole from "../Authorization/NewRole";

function App() {
  return (
    <div>
      <Container className="flex"><NewRole/></Container>    
    </div>
  );
}

export default App;
