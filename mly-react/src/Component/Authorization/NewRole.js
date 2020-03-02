import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleAddress">Role Adı</Label>
        <Input type="text" name="role" id="roles" placeholder="Yetki Tipini Giriniz"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;