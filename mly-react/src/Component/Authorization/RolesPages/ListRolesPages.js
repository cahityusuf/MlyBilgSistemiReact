import React from "react";
import MaterialTable from "material-table";

export default function ListRolesPages({rolesPages}) {
   const [state, setState] = React.useState({
    columns: [
      { title: 'Role', field: 'role' },
      { title: 'Sayfa Url', field: 'sayfaUrl' },
      { title: 'Detay', field: 'detay' },

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
      title="Editable Example"
      columns={state.columns}
      data={rolesPages.map(rolespages=>({
      
        role:rolespages.roleName,
        sayfaUrl:rolespages.pagesURL,
        detay:rolespages.pagesDetail
        
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
