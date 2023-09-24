// logic - apifetching


import api from '../api/restaurant'
import { FAIL, SUCCESS } from '../Constants/restaurantConstants';



//logic for updating state

export const RestAction = () => async (dispatch) => {

    try {
        const response = await api.get("/restaurants")
        console.log("w", response);
        dispatch({
            payload: response,
            type: 'SUCCESS'
        })
    }
    catch(error){
        dispatch({
            payload: error,     
            type: 'FAIL'
        })

    }
   
}






































































