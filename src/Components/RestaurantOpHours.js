import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function RestaurantOpHours({opdetails}) {
console.log("opdetails",opdetails);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="outline-danger" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Monday: {opdetails.operating_hours.Monday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Tuesday: {opdetails.operating_hours.Tuesday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Wednesday: {opdetails.operating_hours.Wednesday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Thursday: {opdetails.operating_hours.Thursday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Friday: {opdetails.operating_hours.Friday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Saturday: {opdetails.operating_hours.Saturday}</ListGroup.Item>
                        <ListGroup.Item style={{backgroundColor:"darkorange",color:"white"}}>Sunday: {opdetails.operating_hours.Sunday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default RestaurantOpHours
