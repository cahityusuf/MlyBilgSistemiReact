import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
       <FormGroup>
        <Label for="exampleAddress">Menü başlık Adı</Label>
        <Input type="text" name="page" id="pages" placeholder="Başlık oluşturunuz"/>
      </FormGroup>

      <FormGroup>
      <Label for="exampleAddress">Başlık Açıklaması</Label>
        <Input type="textaria" name="detail" id="pagedetail" placeholder="Başlık hakkında açıklama giriniz"/>
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