import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";


function ListRolesPages({
  tokenSuccess
}) {

  const [state, setState] = React.useState({
    columns: [
      { title: "Role", field: "roleName" },
      { title: "Sayfa Adı", field: "pageName" },
      { title: "Sayfa Url", field: "pagesURL" },
      { title: "Icon", field: "pageIconName" },
      { title: "Detay", field: "pagesDetail" }
    ],
    //data: chanceRolesPagesList,
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
      title="Rollerin girmeye yetkili olduğu sayfalar"
      columns={state.columns}
      //data={chanceRolesPagesList}
      editable={{
        // onRowUpdate: (newData, oldData) =>
        // new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     updateRolesPages(newData, tokenSuccess.token).then(()=>{ chanceRolesPages(tokenSuccess.token,newData.roleId)});
        //     resolve();
        //   }, 600);
        // }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              //deleteRolesPages(oldData, tokenSuccess.token).then(() => {
                //chanceRolesPages(tokenSuccess.token, oldData.roleId);
              //});
              resolve();
            }, 600);
          })
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    chanceRolesPagesList: state.changeRolesPagesReducer,
    tokenSuccess: state.tokenReducer
  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ListRolesPages);
