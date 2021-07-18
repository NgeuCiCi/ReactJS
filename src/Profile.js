import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
export default function Profile(props) {
    console.log('Profile');
    console.log(props.show);
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body closeButton>
                <h4>Bùi Thanh Sang</h4>

                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
            </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    props.setShow(false);
                }}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}