import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deleteRolesPages,
  updateRolesPages,
  chanceRolesPages
} from "../../../Redux/Actions/RolesPagesAction";

function ListRolesPages({
  chanceRolesPages,
  deleteRolesPages,
  updateRolesPages,
  chanceRolesPagesList,
  tokenSuccess
}) {
  useEffect(() => {
    if (chanceRolesPagesList.length === 0) {
      chanceRolesPages(tokenSuccess.token, tokenSuccess.roleId);
    }
  }, []);
  const [state, setState] = React.useState({
    columns: [
      { title: "Role", field: "roleName" },
      { title: "Sayfa Adı", field: "pageName" },
      { title: "Sayfa Url", field: "pagesURL" },
      { title: "Icon", field: "pageIconName" },
      { title: "Detay", field: "pagesDetail" }
    ],
    data: chanceRolesPagesList,
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
      data={chanceRolesPagesList}
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
              deleteRolesPages(oldData, tokenSuccess.token).then(() => {
                chanceRolesPages(tokenSuccess.token, oldData.roleId);
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
    chanceRolesPagesList: state.changeRolesPagesReducer,
    tokenSuccess: state.tokenReducer
  };
}

const mapDispatchToProps = {
  chanceRolesPages,
  deleteRolesPages,
  updateRolesPages
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRolesPages);
