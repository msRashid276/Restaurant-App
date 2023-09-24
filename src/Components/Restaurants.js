import React, { useEffect, useState } from 'react'
import api from '../api/restaurant'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import { RestAction } from '../Actions/restaurantAction'
import { useDispatch, useSelector } from 'react-redux'
import { restaurantReducers } from '../Reducers/restaurantReducers'





function Restaurants() {

  // const [items, setItems] = useState([])
  const dispatch = useDispatch()

  // fetching data from server


  // const fetchData = async () => {
  //   const response = await api.get("/restaurants")
  //   console.log(response.data);
  //   setItems(response.data)
  // }
  // console.log("items", items);




  const {Restaurants}= useSelector(state=>state.restaurantReducers)
  console.log("Restaurants",Restaurants);
  

  useEffect(() => {
    // fetchData()
    dispatch(RestAction())

  }, [])



  return (
    <div className='container'>
      <Row>
        {Restaurants.data?.map(item => (
          <Col sm={12} md={6} lg={4} xl={3} className='mt-4'>
            <RestaurantCard data={item}/>
          </Col>
        ))}

      </Row>
    </div>
  )
}

export default Restaurants
