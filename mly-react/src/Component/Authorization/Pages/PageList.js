import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rolesPagesActions from "../../../Redux/Actions/RolesPagesAction"

class PageList extends Component {

  componentDidMount() {
    this.props.actions.getRolesPages();
  }

  render() {
  
    return (
      <div>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Rol</th>
          <th>Sayfa Url</th>
          <th>Detay</th>
        </tr>
      </thead>
      <tbody>
        {this.props.currentRolesPages.map(rolesPages=>(
        <tr key={rolesPages.rolesPagesId}>
          <th scope="row">1</th>
          <td>{rolesPages.roleName}</td>
          <td>{rolesPages.pagesURL}</td>
          <td>{rolesPages.pagesDetail}</td>
        </tr>          
        ))}

      </tbody>
    </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentRolesPages: state.rolesPagesListReducer,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getRolesPages: bindActionCreators(rolesPagesActions.getRolesPages, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
