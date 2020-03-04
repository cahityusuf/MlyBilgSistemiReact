import React, { Component } from "react";
import {
  Button,
  Col,
  Row
} from "reactstrap";
import { connect } from "react-redux";
import RoleList from './Roles/RoleList'
import PageList from './Pages/PageList'

class RolesPages extends Component {

  render() {
    return (
      <div>
        <Row>
            <Col xs="3">
            <RoleList></RoleList>
            </Col>
            <Col xs="9">
            <PageList></PageList>
            <hr />
            <Button>Submit</Button>
            <h5>Seçili Role Adı:{this.props.currentRole.name}</h5>
            <h5>Seçili Role Id:{this.props.currentRole.id}</h5>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    currentRole: state.changeRolesReducer,
  };
}

export default connect(mapStateToProps)(RolesPages);
