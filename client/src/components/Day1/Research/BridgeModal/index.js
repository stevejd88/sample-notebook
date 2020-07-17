import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BridgeSlides from "../BridgeSlides";

import "./bridgemodal.scss";

function BridgeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <>
        <Button
          className='btn-open-slides'
          variant='primary'
          onClick={handleShow}
        >
          Bridge Slides
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <BridgeSlides />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Fragment>
  );
}

export default BridgeModal;
