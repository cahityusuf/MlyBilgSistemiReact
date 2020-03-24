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
  tokenSuccess,
  RequestDetail,
  history,
  ...props
}) {
  const [request, setRequestType] = useState({ ...props.request });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (RequestType.length === 0 && RequestDetail.length === 0) {
      getRequestType(tokenSuccess.token);
      getRequestDetail(tokenSuccess.token);
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
        getRequestDetail(tokenSuccess.token);
        alertify.success(request.requestName+" "+ "başarıyla kaydedildi",5);
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

  console.log("Kafadar"+" "+RequestType)
  return (
    <AddRequest
      requestList={RequestDetail}
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
    RequestDetail: state.requestListReducer,
    tokenSuccess:state.tokenReducer
  };
}

const mapDispatchToProps = {
  getRequestType,
  getRequestDetail,
  saveRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRequest);
