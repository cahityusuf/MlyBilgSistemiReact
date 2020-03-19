import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRoles, saveRole, updateRole } from "../../../Redux/Actions/RolesActions";
import AddRole from "./AddRole";
import alertify from "alertifyjs";

function NewRole({
  getRoles, saveRole, updateRole, roles,tokenSuccess, history, ...props
}) {
  const [role, setRole] = useState({ ...props.role });
  const [errors, setErrors] = useState({});


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
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));
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
    let a = 0;

    roles.map(result => {
      if (
        role.name === result.name 
      ) {
        a += 1;
      }
    });

    if (a === 0) {
      saveRole(role).then(() => {
        getRoles();
        alertify.success(role.name+" "+ "isimli rol başarıyla kaydedildi",5);
        //history.push("/");
      });
    } else {
      alertify.confirm(
        "Yetki vermeye çalıştığınız sayfa zaten yetkili",
        function () {
          alertify.success("Tamam");
        },
        function () {
          alertify.error("Kapat");
        }
      );
    }

    event.preventDefault();
  }
console.warn(tokenSuccess)
  return (
    <AddRole
      roleList={roles}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function mapStateToProps(state) {
  return {
    roles: state.roleListReducer,
    tokenSuccess:state.tokenReducer
  };
}

const mapDispatchToProps = {
  getRoles, saveRole, updateRole
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRole);


