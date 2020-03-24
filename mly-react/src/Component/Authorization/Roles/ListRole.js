import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  deleteRole,
  updateRole,
  saveRole,
  getRoles
} from "../../../Redux/Actions/RolesActions";


function ListRole({
  roles,
  updateRole,
  getRoles,
  deleteRole,
  tokenSuccess
}) {

  useEffect(() => {
    if (roles.length === 0) {
      getRoles(tokenSuccess.token);
    }

  }, []);


  const [state, setState] = React.useState({
    columns: [
      { title: "Rol Id", field: "id" },
      { title: "Rol Adı", field: "name" }
    ],
    data: roles,
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
      data={roles}
      editable={{

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateRole(newData, tokenSuccess.token).then(()=>{ getRoles(tokenSuccess.token)});
              resolve();
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {          
              deleteRole(oldData, tokenSuccess.token).then(()=>{getRoles(tokenSuccess.token)});
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
    roles: state.roleListReducer
  };
}

const mapDispatchToProps = {
  deleteRole,
  updateRole,
  getRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRole);
