import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deleteProjectNavigation,
  updateProjectNavigation,
  getProjectNavigation
} from "../../../Redux/Actions/ProjectsNavigationAction";


function ListProject({
    projectNavigation,
  updateProjectNavigation,
  getProjectNavigation,
  deleteProjectNavigation,
  tokenSuccess
}) {

  useEffect(() => {
    if (projectNavigation.length === 0) {
        getProjectNavigation(tokenSuccess.token);
    }

  }, []);


  const [state, setState] = React.useState({
    columns: [
      { title: "Proje Adı", field: "projectName" },
      { title: "Proje Detayı", field: "projectDetail" },
      { title: "Menü adı", field: "navigationName" },
      { title: "Detayı", field: "navigationDetail" },
      { title: "Iconu", field: "pageIconName" },
    ],
    data: projectNavigation,
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
    // actions={[
    //   {
    //     icon: 'edit',
    //     tooltip: 'Edit User',
    //     onClick: (event, rowData) => alert('You are editing ' + rowData.name)
    //   },
    //   {
    //     icon: 'delete',
    //     tooltip: 'Delete User',
    //     onClick: (event, rowData) => alert('You are editing ' + rowData.name)
    //   }
    // ]}
    localization={{ body: { editRow: { deleteText: 'Bu satırı silmek istediğinden emin misin?' } } }}
      options={{
        headerStyle: {
          backgroundColor: "#424242",
          color: "#FFF"
        },
        rowStyle: {
          backgroundColor: "#EEE"
        }
      }}
      title="Rol listesi"
      columns={state.columns}
      data={projectNavigation}
      editable={{

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
                updateProjectNavigation(newData, tokenSuccess.token).then(()=>{getProjectNavigation(tokenSuccess.token)});
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {          
                deleteProjectNavigation(oldData, tokenSuccess.token).then(()=>{getProjectNavigation(tokenSuccess.token)});
              resolve();           
          },600)
        }),
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    tokenSuccess: state.tokenReducer,
    projectNavigation:state.listProjectsNavigationReducer
  };
}

const mapDispatchToProps = {
    deleteProjectNavigation,
    updateProjectNavigation,
    getProjectNavigation
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProject);
