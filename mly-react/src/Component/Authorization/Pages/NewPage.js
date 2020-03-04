import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
       <FormGroup>
        <Label for="exampleAddress">Sayfa Url</Label>
        <Input type="text" name="page" id="pages" placeholder="Componen Adını Gir"/>
      </FormGroup>

      <FormGroup>
      <Label for="exampleAddress">Sayfa Tanımı</Label>
        <Input type="text" name="detail" id="pagedetail" placeholder="Sayfanın ekranda görünen tanımı"/>
      </FormGroup>      
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Aktif mi
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;