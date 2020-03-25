import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deletePagesRequest,
  getPagesRequest,
  updatePagesRequest
} from "../../../Redux/Actions/PagesRequestAction";

function ListPagesRequest({pagesRequests,deletePagesRequest,getPagesRequest,updatePagesRequest,tokenSuccess}) {

  useEffect(() => {
    if (pagesRequests.length === 0) {
      getPagesRequest(pagesRequests.rolesPagesId,tokenSuccess.token);
    }
  }, []);

   const [state, setState] = React.useState({
    columns: [
      { title: 'Role', field: 'roleName' },
      { title: 'Sayfa Url', field: 'pagesURL' },
      { title: 'Detay', field: 'pagesDetail' },
      { title: 'Request Adı', field: 'requestName' },
      { title: 'Request Tipi', field: 'requestTypeName' }

    ],

    data:pagesRequests,
    
    options:[{
      headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
      }
    }]
  });

  return (
    <MaterialTable
    localization={{ body: { editRow: { deleteText: 'Bu satırı silmek istediğinden emin misin?' } } }}
    options={{
      headerStyle: {
        backgroundColor: '#424242',
        color: '#FFF'
      },
      rowStyle: {
        backgroundColor: '#EEE',
      }
    }}
      title="Sayfaya ait requestler listesi"
      columns={state.columns}
      data={pagesRequests}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updatePagesRequest(newData, tokenSuccess.token).then(()=>{ getPagesRequest(newData.rolesPagesId,tokenSuccess.token)});
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {          
              deletePagesRequest(oldData, tokenSuccess.token).then(()=>{getPagesRequest(oldData.rolesPagesId,tokenSuccess.token)});
              resolve();           
          },600)
        }),
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    pagesRequests: state.pagesRequestListReducer,
    tokenSuccess:state.tokenReducer
  };
}

const mapDispatchToProps = {
  deletePagesRequest,
  getPagesRequest,
  updatePagesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPagesRequest);
