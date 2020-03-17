import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRequestType } from "../../../Redux/Actions/RequestTypeAction";
import { getRequestDetail, saveRequest } from "../../../Redux/Actions/RequestAction";
import AddRequest from "./AddRequest";
import alertify from "alertifyjs";

function NewRequest({
  getRequestType,
  getRequestDetail,
  saveRequest,
  RequestType,
  RequestDetail,
  history,
  ...props
}) {
  const [request, setRequestType] = useState({ ...props.request });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (RequestType.length === 0 && RequestDetail.length === 0) {
      getRequestType();
      getRequestDetail();
    }
    setRequestType({ ...props.request });
  }, [props.request]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRequestType(previousRole => ({
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

    RequestDetail.map(result => {
      if (
        request.requestType === result.requestType &&
        request.requestName === result.requestName
      ) {
        a += 1;
      }
    });

    if (a === 0) {
      saveRequest(request).then(() => {
        getRequestDetail();
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

  return (
    <AddRequest
      request={getRequestDetail}
      requestType={RequestType}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function mapStateToProps(state) {
  return {
    RequestType: state.listRequestTypeReducer,
    RequestDetail: state.requestListReducer
  };
}

const mapDispatchToProps = {
  getRequestType,
  getRequestDetail,
  saveRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRequest);


// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getRequestDetail, saveRequest } from "../../../Redux/Actions/RequestAction";
// import { getRequestType } from "../../../Redux/Actions/RequestTypeAction";
// import AddRequest from "./AddRequest";
// import alertify from "alertifyjs";

// function NewPage({ getRequestType, getRequestDetail, saveRequest, RequestTypes,RequestDetail, history, ...props }) {
//   const [request, setRequestDetail] = useState({ ...props.request });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (RequestTypes.length === 0 && RequestDetail.length === 0) {
//       getRequestType();
//       getRequestDetail();
//     }
//     setRequestDetail({ ...props.request });
//   }, [props.request]);

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setRequestDetail(previousRole => ({
//           ...previousRole,
//           [name]: name === "categoryId" ? parseInt(value, 10) : value
//         }));



//     Validate(name, value);
//   }

//   function Validate(name, value) {
//     if (value === "" && name === "rolId") {
//       setErrors(previousErrors => ({
//         ...previousErrors,
//         name: "Ürün ismi olmalıdır"
//       }));
//     } else {
//       setErrors(previousErrors => ({
//         ...previousErrors,
//         name: ""
//       }));
//     }
//   }

//   function handleSave(event) {
//     event.preventDefault();
//     let a = 0;
//     RequestDetail.map(result => {
//       if (
//         request.requestType === result.requestType &&
//         request.requestName === result.requestName
//         ) {
//         a += 1;
//       }
//     });

//     if (a === 0) {
//       saveRequest(request).then(() => {
//         console.log("skvnaka",+" "+request)
//         //getRequestDetail();
//         //   //history.push("/");
//       });
//     } else {
//       alertify.confirm(
//         "Yetki vermeye çalıştığınız sayfa zaten yetkili",
//         function() {
//           alertify.success("Tamam");
//         },
//         function() {
//           alertify.error("Kapat");
//         }
//       );
//     }
//   }
// console.log(request)
//   return (
//     <AddRequest
//       requests={RequestDetail}
//       requestType={RequestTypes}
//       onChange={handleChange}
//       onSave={handleSave}
//       errors={errors}
//     />
//   );
// }

// // export function getRoleById(pages, Id) {
// //   let page = pages.find(page => page.Id === Id) || null;
// //   return page;
// // }

// function mapStateToProps(state) {
//   return {
//     RequestTypes: state.listRequestTypeReducer,
//     RequestDetail:state.requestListReducer
//   };
// }

// const mapDispatchToProps = {
//   getRequestType, 
//   getRequestDetail, 
//   saveRequest
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
