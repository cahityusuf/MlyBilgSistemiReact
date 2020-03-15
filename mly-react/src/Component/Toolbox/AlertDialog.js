
  import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AlertDialog = (props) => {
  const {
    buttonLabel,
    className,
    Agree,
    Disagree,
    BodyMessage,
    HeaderMessage,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* //<Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{HeaderMessage}</ModalHeader>
        <ModalBody>
          {BodyMessage}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>{Agree}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{Disagree}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AlertDialog;