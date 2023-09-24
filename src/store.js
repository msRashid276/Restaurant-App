

// store creation

import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantReducers } from "./Reducers/restaurantReducers";




const reducers = combineReducers({restaurantReducers})

const middleware = [thunk]


const store = createStore(reducers,applyMiddleware(...middleware))


export default store