import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoles, saveRole } from "../../../Redux/Actions/RolesActions";
import { getPages } from "../../../Redux/Actions/PageAction";
import AddRolesPages from "./AddRolesPages";
import {getRolesPages} from "../../../Redux/Actions/RolesPagesAction"

function RolesPages({
  getRoles,
  getPages,
  saveRole,
  updateRole,
  roles,
  pages,
  getRolesPages,
  history,
  ...props
}) {
  const [role, setRole] = useState({ ...props.role });
  const [page, setPage] = useState({ ...props.page });
  const [errors, setErrors] = useState({});

  useEffect(
    () => {
      if (roles.length === 0 && pages.length===0) {
        getRoles();
        getPages();
      }
      setRole({ ...props.role });
      setPage({ ...props.page });
    },
    [props.role],
    [props.page]
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setRole(previousRole => ({
      ...previousRole,
      [name]: name === value
    }));

    Validate(name,value);
  }

  function Validate(name,value) {
    if (value === "" && name==="rolId") {
      setErrors(previousErrors => ({
        ...previousErrors,
        name: "Ürün ismi olmalıdır"
      }));
    }else{
      setErrors(previousErrors => ({
        ...previousErrors,
        name: ""
      }));
    }
  }

  function handleSave(params) {
    params.preventDefault();
    saveRole(role).then(() => {
      history.push("/");
    });
  }

  return (
    <AddRolesPages
      roles={roles}
      pages={pages}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
      //rolesPages={GetRolesPagesList()}
    />
  );
}

// export function getRoleById(roles, Id) {
//   let role = roles.find(role => role.Id === Id) || null;
//   return role;
// }

function mapStateToProps(state) {
  return {
    roles: state.roleListReducer,
    pages: state.pageListReducer
  };
}

const mapDispatchToProps = {
  getRoles,
  getPages,
  saveRole,
  getRolesPages
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesPages);
