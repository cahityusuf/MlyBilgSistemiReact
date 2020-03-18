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
      getUserRoles();
      getRoles();
      getUsers();
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
      getUserRoles(value);
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
      if (
        usersRoles.userId === result.userId &&
        usersRoles.roleId === result.roleId
      ) {
      
        a += 1;
      }
    });

    if (a === 0) {

      saveUserRoles(usersRoles).then(() => {
        getUserRoles(usersRoles.userId);
        alertify.success("Kullanıcı rolü başarıyla kaydedildi",5);
      //   //history.push("/");
       });


    } else {
      alertify.confirm(
        "Yetki vermeye çalıştığınız sayfa zaten yetkili",
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
      userRoles={userRoles}
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
    users:state.listUserReducer,
    userRoles: state.listUserRolesReducer,

  };
}

const mapDispatchToProps = {
  getUserRoles,
  getRoles,
  getUsers,
  saveUserRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesRequest);
