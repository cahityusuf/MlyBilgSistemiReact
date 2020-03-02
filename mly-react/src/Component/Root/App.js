import React from "react";
//import Navigation from "../Navigation/Navigation";

import Dashboard from "./Dashboard"
import { Container } from "reactstrap";

function App() {
  return (
    <div>
      <Container className="flex"><Dashboard/></Container>    
    </div>
  );
}

export default App;
