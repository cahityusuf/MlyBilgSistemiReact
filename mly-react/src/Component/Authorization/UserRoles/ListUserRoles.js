import React, { useEffect }  from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import {
  getUserRoles,
  updateUserRoles,
  deleteUserRoles
} from "../../../Redux/Actions/UserRolesAction";

function ListUserRoles({userRoles,getUserRoles,userId,updateUserRoles,deleteUserRoles,tokenSuccess}) {

  useEffect(() => {
    if (userRoles.length === 0) {
      getUserRoles(userId,tokenSuccess.token);
    }

  }, []);


   const [state, setState] = React.useState({
    columns: [
      { title: 'Pbik', field: 'pbik' },
      { title: 'Tc', field: 'tckimlikno' },
      { title: 'Adı', field: 'name' },
      { title: 'Soyadı', field: 'surname' },
      { title: 'Rolü', field: 'roleName' },

    ],
    data:userRoles,
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
      title="Kullanıcı Rolleri"
      columns={state.columns}
      data={userRoles}
      // data={userRoles.userRoles.map(userRole=>({
      
      //   pbik:userRole.pbik,
      //   tc:userRole.tckimlikno,
      //   name:userRole.name,
      //   surname:userRole.surname,
      //   roles:userRole.roleName
        
      // }))}
      editable={{
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       updateUserRoles(newData, tokenSuccess.token).then(()=>{ getUserRoles(newData.userId,tokenSuccess.token)});
        //       resolve();
        //     }, 600);
        //   }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {          
              deleteUserRoles(oldData, tokenSuccess.token).then(()=>{ getUserRoles(oldData.userId,tokenSuccess.token)});
              resolve();           
          },600)
        }),

      }}
    />
  );
}


function mapStateToProps(state) {
  return {
    userRoles: state.listUserRolesReducer,
    tokenSuccess:state.tokenReducer
  };
}

const mapDispatchToProps = {
  getUserRoles,
  updateUserRoles,
  deleteUserRoles
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserRoles);