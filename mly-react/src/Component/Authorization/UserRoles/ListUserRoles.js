import React from "react";
import MaterialTable from "material-table";

export default function ListUserRoles(userRoles) {
   const [state, setState] = React.useState({
    columns: [
      { title: 'Pbik', field: 'pbik' },
      { title: 'Tc', field: 'tc' },
      { title: 'Adı', field: 'name' },
      { title: 'Soyadı', field: 'surname' },
      { title: 'Rolü', field: 'roles' },

    ],
    
    options:[{
      headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
      }
    }]
  });

  return (
    <MaterialTable
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
      data={userRoles.userRoles.map(userRole=>({
      
        pbik:userRole.pbik,
        tc:userRole.tckimlikno,
        name:userRole.name,
        surname:userRole.surname,
        roles:userRole.roleName
        
      }))}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
