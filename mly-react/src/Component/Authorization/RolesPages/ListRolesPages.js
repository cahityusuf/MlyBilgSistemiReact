import React from "react";
import { Table } from "reactstrap";

const ListRolesPages = ({
  roles,
  pages,
  getRoles,
  getPages,
}) => {
  return(
    <div>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Rol</th>
          <th>Sayfa Url</th>
          <th>Detay</th>
        </tr>
      </thead>
      <tbody>
        {this.props.currentRolesPages.map(rolesPages=>(
        <tr key={rolesPages.rolesPagesId}>
          <th scope="row">1</th>
          <td>{rolesPages.roleName}</td>
          <td>{rolesPages.pagesURL}</td>
          <td>{rolesPages.pagesDetail}</td>
        </tr>          
        ))}

      </tbody>
    </Table>
      </div>
  )
};

export default ListRolesPages;
