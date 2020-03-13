import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoles } from "../../../Redux/Actions/RolesActions";
import { getPages } from "../../../Redux/Actions/PageAction";
import AddRolesPages from "./AddRolesPages";
import {getRolesPages,saveRolesPages} from "../../../Redux/Actions/RolesPagesAction"

function RolesPages({
  getRoles,
  getPages,
  getRolesPages,
  saveRolesPages,
  updateRole,
  roles,
  pages,
  rolesPages,
  history,
  ...props
}) {
  const [role, setRole] = useState({ ...props.role });
  const [page, setPage] = useState({ ...props.page });
  const [rolesPage, setRolesPages] = useState({ ...props.rolesPages });
  const [errors, setErrors] = useState({});

  useEffect(
    () => {
      if (roles.length === 0 && pages.length===0) {
        getRoles();
        getPages();
        getRolesPages();
      }
      setRole({ ...props.role });
      setPage({ ...props.page });
      setRolesPages({ ...props.rolesPage });
    },
    [props.rolesPage],
    [props.role],
    [props.page]

  );

  function handleChange(event) {
    const { name, value } = event.target;
    setRole(previousRole => ({
      ...previousRole,
      [name]: name === value
    }));
    getRolesPages(value);
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
    console.log(roles);
    params.preventDefault();
    saveRolesPages(role).then(() => {
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
      rolesPages={rolesPages}
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
    pages: state.pageListReducer,
    rolesPages:state.rolesPagesListReducer
  };
}

const mapDispatchToProps = {
  getRoles,
  getPages,
  saveRolesPages,
  getRolesPages
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesPages);
