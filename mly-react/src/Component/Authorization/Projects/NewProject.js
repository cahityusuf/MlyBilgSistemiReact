import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProjectNavigation, saveProjectNavigation, updateProjectNavigation } from "../../../Redux/Actions/ProjectsNavigationAction";
import AddProjects from "./AddProjects"
import alertify from "alertifyjs";

function NewProject({
    projectNavigation, getProjectNavigation, saveProjectNavigation, updateProjectNavigation,tokenSuccess, history, ...props
}) {
  const [navigation, setProjectNavigation] = useState({ ...props.navigation });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setProjectNavigation(previousProject => ({
      ...previousProject,
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
    event.preventDefault();
    let a = 0;

    projectNavigation.map(result => {
      if (
        navigation.projectName === result.projectName 
      ) {
        a += 1;
      }
    });

    if (a === 0) {
        saveProjectNavigation(navigation).then(() => {
            //getProjectNavigation(tokenSuccess.token);
        alertify.success(navigation.projectName+" "+ "isimli rol başarıyla kaydedildi",5);

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

    
  }


  return (
    <AddProjects
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function mapStateToProps(state) {
  return {
    tokenSuccess:state.tokenReducer,
    projectNavigation:state.listProjectsNavigationReducer
  };
}

const mapDispatchToProps = {
    getProjectNavigation, saveProjectNavigation, updateProjectNavigation
};


export default connect(mapStateToProps, mapDispatchToProps)(NewProject);


