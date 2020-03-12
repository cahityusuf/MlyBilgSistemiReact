import React from "react";
import SelectInput from "../../Toolbox/SelectInput";
import { Button, Table } from "reactstrap";

const AddRolesPages = ({ roles, pages, onChange, onSave, errors, rolesPages }) => {
  console.log(rolesPages);
  return (

    <form onSubmit={onSave}>
      <SelectInput
        name="roleId"
        label="Role"
        value={roles.name}
        defaultOption="Seçiniz..."
        options={roles.map(role => ({
          value: role.id,
          text: role.name
        }))}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="pageId"
        label="Page"
        value={pages.pagesId}
        defaultOption="Seçiniz..."
        options={pages.map(page => ({
          value: page.pagesId,
          text: page.pagesURL + " ---> " + page.pagesDetail
        }))}
        onChange={onChange}
        error={errors.pagesURL}
      />
      <Button type="submit" className="btn btn-success">
        Kaydet
      </Button>

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
          {/* {rolesPages.map(rolesPages => (
            <tr key={rolesPages.rolesPagesId}>
              <th scope="row">1</th>
              <td>{rolesPages.roleName}</td>
              <td>{rolesPages.pagesURL}</td>
              <td>{rolesPages.pagesDetail}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </form>
  );
};

export default AddRolesPages;
