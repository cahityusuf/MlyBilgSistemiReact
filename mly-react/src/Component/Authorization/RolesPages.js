import React, { Component } from "react";
import {
  Button,
  Col,
  Row
} from "reactstrap";
import RoleList from "./Roles/RoleList";
import PageList from "./Pages/PageList";
//import * as rolesPagesActions from "../../Redux/Actions/RolesPagesAction"

class RolesPages extends Component {

  // componentDidMount() {
  //   this.props.actions.getRolesPages();
  // }

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
            {/* <h5>Seçili Role Adı:{this.props.currentRole.name}</h5>
            <h5>Seçili Role Id:{this.props.currentRole.id}</h5> */}
          </Col>
        </Row>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   console.log(state)
//   return {
//     currentRole: state.changeRolesReducer,
//     currentRolesPages: state.rolesPagesListReducer,
//   };
// }


// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       getRolesPages: bindActionCreators(rolesPagesActions.getRolesPages, dispatch),
//     }
//   };
// }


export default RolesPages;
