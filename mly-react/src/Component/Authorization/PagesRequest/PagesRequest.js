import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRequestDetail } from "../../../Redux/Actions/RequestAction";
import { getRoles } from "../../../Redux/Actions/RolesActions";
import { getRolesPages } from "../../../Redux/Actions/RolesPagesAction";
import AddPagesRequest from "./AddPagesRequest";
import {
  getPagesRequest,
  savePagesRequest
} from "../../../Redux/Actions/PagesRequestAction";
import alertify from "alertifyjs";

function RolesRequest({
  getRequestDetail,
  getRoles,
  getPagesRequest,
  getRolesPages,
  savePagesRequest,
  rolesPages,
  pagesRequests,
  roles,
  requests,
  history,
  ...props
}) {
  const [pagesRequest, setpagesRequest] = useState({ ...props.pagesRequest });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (requests.length === 0 && roles.length === 0 && pagesRequests.length===0) {
      getRequestDetail();
      getRoles();
      getPagesRequest();
      getRolesPages();
    }
    setpagesRequest({ ...props.pagesRequests });
  }, [props.pagesRequests]);

  function handleChange(event) {

    const { name, value } = event.target;
    setpagesRequest(previousRole => ({
      ...previousRole,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));
    console.log(pagesRequest)
    if (event.target.name === "roleId") {
      getRolesPages(value);
    }
    if (event.target.name === "rolesPagesId") {
      getPagesRequest(value);
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
    console.log(pagesRequest)
    let a = 0;
    pagesRequests.map(result => {
      if (
        pagesRequest.rolesPagesId === result.rolesPagesId &&
        pagesRequest.requestsId === result.requestsId
      ) {
      
        a += 1;
      }
    });

    if (a === 0) {
      savePagesRequest(pagesRequest).then(() => {
        console.log(pagesRequest.rolesPagesId)
        getPagesRequest(pagesRequest.rolesPagesId);
        //history.push("/");
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

    event.preventDefault();
  }

  return (
    <AddPagesRequest
      roles={roles}
      rolesPages={rolesPages}
      requests={requests}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
      pagesRequests={pagesRequests}
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
    requests:state.requestListReducer,
    pagesRequests: state.pagesRequestListReducer,
    rolesPages:state.rolesPagesListReducer
  };
}

const mapDispatchToProps = {
  getRoles,
  getRolesPages,
  getRequestDetail,
  getPagesRequest,
  savePagesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesRequest);
