import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';


function RestaurantCard({ data }) {

  const navigateTo = useNavigate()
  return (
    <div>
      <Card >
        <div onClick={()=>{navigateTo(`/view/${data.id}` , {state:{Res:data}})}}>
        <Card.Img variant="top" src={data.photograph} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </div>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>


    </div>
  )
}

export default RestaurantCard
