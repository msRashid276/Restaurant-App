import React from 'react'
import { useLocation } from 'react-router-dom';
import { Row, Col, Image} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestaurantOpHours from './RestaurantOpHours';
import RestaurantReview from './RestaurantReview';

function ViewRestaurant({ Res }) {
  const location = useLocation()
  const details = location.state.Res
  console.log("details of view", details);
  return (
    <div className='container mt-3 mb-3'>
      <Row>
        <Col sm={12} md={8} lg={6} xl={5} >
          <Image src={details.photograph} style={{ width: '400px' }} />
        </Col>
        <Col sm={12} md={4} lg={6} xl={7}>
          <h2 className='text-danger'>{details.name}</h2>
          <h5>{details.neighborhood}</h5>
          <ListGroup className='mb-5' style={{border:"6px groove orange"}}>
            <ListGroup.Item style={{color:"red",fontSize:"20px"}}>Cuisine: {details.cuisine_type}</ListGroup.Item>
            <ListGroup.Item><RestaurantOpHours opdetails={details}/></ListGroup.Item>
            <ListGroup.Item><RestaurantReview reviewDetails={details.reviews}/></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRestaurant


