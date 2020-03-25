import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deleteRequest,
  updateRequest,
  getRequestDetail
} from "../../../Redux/Actions/RequestAction";

function ListRequest({
  requestDetail,
  getRequestDetail,
  updateRequest,
  deleteRequest,
  tokenSuccess
}) {
  useEffect(() => {
    if (requestDetail.length === 0) {
      getRequestDetail(tokenSuccess.token);
    }
  }, []);
  const [state, setState] = React.useState({
    columns: [
      { title: "Request Adı", field: "requestName" },
      { title: "Request Tipi", field: "requestTypeName" },
      { title: "Detayı", field: "typeDetail" }
    ],
    data: requestDetail,
    options: [
      {
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF"
        }
      }
    ]
  });

  return (
    <MaterialTable
      localization={{
        body: {
          editRow: { deleteText: "Bu satırı silmek istediğinden emin misin?" }
        }
      }}
      options={{
        headerStyle: {
          backgroundColor: "#424242",
          color: "#FFF"
        },
        rowStyle: {
          backgroundColor: "#EEE"
        }
      }}
      title="Request Listesi"
      columns={state.columns}
      data={requestDetail}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateRequest(newData, tokenSuccess.token).then(() => {
                getRequestDetail(tokenSuccess.token);
              });
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              deleteRequest(oldData, tokenSuccess.token).then(() => {
                getRequestDetail(tokenSuccess.token);
              });
              resolve();
            }, 600);
          })
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer,
    requestDetail: state.requestListReducer
  };
}

const mapDispatchToProps = {
  deleteRequest,
  updateRequest,
  getRequestDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRequest);
