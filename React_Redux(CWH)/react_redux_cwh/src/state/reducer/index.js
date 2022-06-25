import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";
import MovieReducer from "./MovieReducer";
const reducers=combineReducers({
    amount:AmountReducer,
    movies:MovieReducer
})
export default reducers