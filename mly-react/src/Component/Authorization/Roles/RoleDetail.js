import React from "react";
import TextInput from "../../Toolbox/TextInput";
import { Button } from "reactstrap";

const RoleDetail = (role, onSave, onChange) => {
  return (
    <form onSubmit={onSave}>
      <h2>"Ekle"</h2>
      <TextInput
        name="roleName"
        label="Role Adı"
        value={role.Name}
        onChance={onChange}
        error="Hata"
      />

      <Button type="submit" className="btn btn-success">
        Kaydet
      </Button>
    </form>
  );
};

export default RoleDetail;
