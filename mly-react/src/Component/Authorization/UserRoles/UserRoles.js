import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoles } from "../../../Redux/Actions/RolesActions";
import { getUsers } from "../../../Redux/Actions/UserActions";
import AddUserRoles from "./AddUserRoles";
import {
  getUserRoles,
  saveUserRoles
} from "../../../Redux/Actions/UserRolesAction";
import alertify from "alertifyjs";

function RolesRequest({
  getUserRoles,
  getRoles,
  getUsers,
  saveUserRoles,
  tokenAccess,
  users,
  roles,
  userRoles,
  history,
  ...props
}) {
  const [usersRoles, setUsersRoles] = useState({ ...props.usersRoles });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (users.length === 0 && roles.length === 0) {
      getUserRoles(tokenAccess.token);
      getRoles(tokenAccess.token);
      getUsers(tokenAccess.token);
    }
    setUsersRoles({ ...props.usersRoles });
  }, [props.usersRoles]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUsersRoles(previousRole => ({
      ...previousRole,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));

    if (event.target.name === "userId") {
      getUserRoles(value, tokenAccess.token);
    }

    Validate(name, value);
  }

  function Validate(name, value) {
    if (value === "" && name === "rolId") {
      setErrors(previousErrors => ({
        ...previousErrors,
        name: "Ürün ismi olmalıdır"
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        name: ""
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    let a = 0;
    userRoles.map(result => {
      if (usersRoles.userId === result.userId) {
        a += 1;
      }
    });

    if (a === 0) {
      saveUserRoles(usersRoles).then(() => {
        getUserRoles(usersRoles.userId, tokenAccess.token);
        alertify.success("Kullanıcı rolü başarıyla kaydedildi", 5);
        //   //history.push("/");
      });
    } else {
      alertify.confirm(
        "Bir kullanıcıya birden fazla rol verilemez",
        function() {
          alertify.success("Tamam");
        },
        function() {
          alertify.error("Kapat");
        }
      );
    }
  }

  return (
    <AddUserRoles
      roles={roles}
      users={users}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
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
    users: state.listUserReducer,
    userRoles: state.listUserRolesReducer,
    tokenAccess: state.tokenReducer
  };
}

const mapDispatchToProps = {
  getUserRoles,
  getRoles,
  getUsers,
  saveUserRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesRequest);
