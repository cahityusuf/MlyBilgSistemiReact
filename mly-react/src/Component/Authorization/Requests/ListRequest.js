import React from "react";
import MaterialTable from "material-table";

export default function ListRequest({requestList}) {
   const [state, setState] = React.useState({
    columns: [
      { title: 'Request Adı', field: 'RequestName' },
      { title: 'Request Tipi', field: 'RequestTypeName' },
      { title: 'Detayı', field: 'TypeDetail' }
      

    ],
    
    options:[{
      headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
      }
    }]
  });

  console.log(requestList);

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
      data={requestList.map(requestDetail=>({
      
        RequestName:requestDetail.requestName,
        RequestTypeName:requestDetail.requestTypeName,
        TypeDetail:requestDetail.typeDetail
        
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
