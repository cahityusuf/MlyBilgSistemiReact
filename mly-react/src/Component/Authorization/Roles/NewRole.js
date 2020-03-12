import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoles, saveRole } from "../../../Redux/Actions/RolesActions";
import AddRole from "./AddRole";


function NewRole({ getRoles, saveRole, updateRole, roles, history, ...props }) {
  const [role, setRole] = useState({ ...props.role });

  useEffect(() => {
    if (roles.length === 0) {
      getRoles();
    }
    setRole({ ...props.role });
  }, [props.role]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRole(previousRole => ({
      ...previousRole,
      [name]: name === value
    }));
  }

  function handleSave(params) {
    params.preventDefault();
    saveRole(role).then(() => {
      history.push("/");
    });
  }

  return <AddRole role={role} onChange={handleChange} onSave={handleSave} />;
}

export function getRoleById(roles, Id) {
  let role = roles.find(role => role.Id === Id) || null;
  return role;
}

function mapStateToProps(state) {
    return {
      roles: state.roleListReducer,
    };
  }

const mapDispatchToProps = {
  getRoles,
  saveRole
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRole);
