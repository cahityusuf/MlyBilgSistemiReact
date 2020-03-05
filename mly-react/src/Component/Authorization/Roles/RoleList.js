import React, { Component } from "react";
import { Label, ListGroupItem} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rolesActions from "../../../Redux/Actions/RolesActions";
import * as rolesPagesActions from "../../../Redux/Actions/RolesPagesAction"

class RoleList extends Component {
  componentDidMount() {
    this.props.actions.getRoles();
  }

  selectCategory = role => {
    this.props.actions.changeRole(role);
    this.props.actions.getRolesPages(role.id);
  };

  render() {

    return (
      <div>
        <Label for="exampleAddress">Sayfa Yetkisi Verilecek Rolü Seçiniz</Label>

        {this.props.roles.map(role => (
          <ListGroupItem
            active={role.id === this.props.currentRole.id}
            onClick={() => this.selectCategory(role)}
            key={role.id}
          >
            {role.name}
          </ListGroupItem>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentRole: state.changeRolesReducer,
    roles: state.roleListReducer,
    currentRolesPages: state.rolesPagesListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getRoles: bindActionCreators(rolesActions.getRoles, dispatch),
      changeRole: bindActionCreators(rolesActions.ChangeRoles, dispatch),
      getRolesPages: bindActionCreators(rolesPagesActions.getRolesPages, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleList);
