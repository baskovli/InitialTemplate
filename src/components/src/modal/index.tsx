import React from "react";
import { Modal as ModalBoostrap, ModalHeader, ModalBody } from "reactstrap";

const Modal = React.memo((props: any) => {
  return (
    <ModalBoostrap
      backdrop={props.backdrop ? props.backdrop : ""}
      width={1500}
      height="auto"
      autoFocus={true}
      size={props.size ? props.size : "sm"}
      isOpen={props.isOpen}
      toggle={props.toggle}
    >
      <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      {/* <ModalFooter>
    <Button color="primary" onClick={props.toggle}>
      Do Something
    </Button>{" "}
    <Button color="secondary" onClick={props.toggle}>
      Cancel
    </Button>
  </ModalFooter> */}
    </ModalBoostrap>
  );
});

export default Modal;
