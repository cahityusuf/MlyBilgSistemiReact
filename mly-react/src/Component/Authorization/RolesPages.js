import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rolesActions from "../../Redux/Actions/RolesActions";
import * as pagesActions from "../../Redux/Actions/PageAction";

class RolesPages extends Component {
  componentDidMount() {
    this.props.actions.getRoles();
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleAddress">Sayfa Yetkisi Verilecek Rolü Seçiniz</Label>
            <Input type="select" name="select" id="exampleSelect">
              {this.props.roles.map(role => (
                <option key={role.id}>{role.name}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Sayfayı Seçiniz</Label>
            <Input type="select" name="select" id="exampleSelect">
              {this.props.roles.map(role => (
                <option key={role.id}>{role.name}</option>
              ))}
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state)
  return {
    currentRole: state.changeRolesReducer,
    roles: state.roleListReducer,
    pages: state.pageListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getRoles: bindActionCreators(rolesActions.getRoles, dispatch),
      getPages: bindActionCreators(pagesActions.getPages, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesPages);

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// //import {connect} from "react-redux"

// class NewRole extends Component {
//   render() {

//     return (
//       <div>
//         <h5>Şecili Role: {this.props.currentRole.roleName}</h5>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//  // console.log(state.changeRolesReducer.roleName)
//   return {
//     currentRole:state.changeRolesReducer
//   }
// }

// export default connect(mapStateToProps)(NewRole)
