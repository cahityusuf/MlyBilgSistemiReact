import React from 'react'
import { Row,Col } from 'reactstrap'
import {connect} from "react-redux"

const PagesRequest = (props) => {
  return (
    <Row>
        <Col xs="3">

        </Col>
        <Col xs="9">
        </Col>
    </Row>
  );
}

function mapStoreToProps(state){
  return {
    currentPages:state.ChancePagesReducer
  }
}
export default connect(mapStoreToProps)(PagesRequest);