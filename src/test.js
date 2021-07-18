import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Profile from './Profile';



export default function App() {
    const [modalShow, setModalShow] = React.useState(false);
    console.log('App');
    console.log(modalShow);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
        </Button>

            <Profile show={modalShow} setShow={setModalShow} />
        </>
    );
}


