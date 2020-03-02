import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleAddress">Request Adı</Label>
        <Input type="text" name="page" id="pages" placeholder="Yetkilendirmede kullanılacak"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Request Tipi</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>GET</option>
          <option>POST</option>
          <option>DELETE</option>
          <option>UPDATE</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;