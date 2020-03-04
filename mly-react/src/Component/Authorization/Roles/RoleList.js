import React, { Component } from "react";
import { Label, ListGroupItem} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rolesActions from "../../../Redux/Actions/RolesActions";

class RoleList extends Component {
  componentDidMount() {
    this.props.actions.getRoles();
  }

  selectCategory = role => {
    this.props.actions.changeRole(role);
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getRoles: bindActionCreators(rolesActions.getRoles, dispatch),
      changeRole: bindActionCreators(rolesActions.ChangeRoles, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleList);
