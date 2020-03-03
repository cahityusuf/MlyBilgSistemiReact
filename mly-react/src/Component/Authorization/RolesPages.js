import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rolesActions from "../../Redux/Actions/RolesActions";
import * as pagesActions from "../../Redux/Actions/PageAction";

class RolesPages extends Component {

  // componentDidMount() {
  //   this.props.actions.getPages();
  //   this.props.actions.getRoles();
  // }

  componentDidMount(){
    this.props.actions.getRoles()
  }
  

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              
                {this.props.roles.map(role=>(
                  <option>
                    role.Name
                  </option>
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
  return {
    currentPages: state.ChancePagesReducer,
    roles: state.RoleListReducer,
    pages: state.PageListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getRoles: bindActionCreators(rolesActions.getRoles, dispatch),
      getPages: bindActionCreators(pagesActions.getPages, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesPages);
