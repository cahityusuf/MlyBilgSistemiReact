import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deleteRages,
  getPages,
  updatePage
} from "../../../Redux/Actions/PageAction";

function ListUserRoles({pages,deleteRages,getPages,updatePage,tokenSuccess}) {

  useEffect(() => {
    if (pages.length === 0) {
      getPages(tokenSuccess.token);
    }
  }, []);


   const [state, setState] = React.useState({
    columns: [
      { title: 'Sayfa Url', field: 'pagesURL' },
      { title: 'Sayfa Adı', field: 'pagesName' },
      { title: 'Detayı', field: 'pagesDetail' },
      { title: 'Sayfa Iconu', field: 'pageIconName' },
      { title: 'Statü', field: 'status' }

    ],
    data:pages,
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
      title="Sayfa kayıt listesi"
      columns={state.columns}
      data={pages}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updatePage(newData, tokenSuccess.token).then(()=>{ getPages(tokenSuccess.token)});
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {          
              deleteRages(oldData, tokenSuccess.token).then(()=>{getPages(tokenSuccess.token)});
              resolve();           
          },600)
        }),
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    pages: state.pageListReducer,
    tokenSuccess:state.tokenReducer
  };
}

const mapDispatchToProps = {
  deleteRages,
  getPages,
  updatePage
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserRoles);
