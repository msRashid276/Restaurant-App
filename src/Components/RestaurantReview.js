import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestaurantReview({reviewDetails}) {

    console.log("reviewDetails",reviewDetails);

    const [open, setOpen] = useState(false);
  return (
    <div>
       <Button variant="outline-danger"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {reviewDetails.map(details=>(
            <div className='border rounded p-2 mt-3' style={{color:"orange"}}>
            <h5>{details.name}</h5>
            <h5>{details.date}</h5>
            <h5>{details.rating}</h5>
            <h5>{details.comments}</h5>
            </div>
         ))}
        </div>
      </Collapse>
    </div>
  )
}

export default RestaurantReview
