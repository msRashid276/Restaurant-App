import { FAIL, SUCCESS } from "../Constants/restaurantConstants";


export const restaurantReducers = (state = { Restaurants: [] }, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                
                Restaurants: action.payload
               
            }
        case FAIL:
            return {
                Restaurants: []
            }
        default:
            return state
    }

}