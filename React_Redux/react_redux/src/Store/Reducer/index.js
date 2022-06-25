import {combineReducers} from 'redux'
import CounterReducer from './counter'
import movies_reducer from './movies_reducer'
const rootReducer=combineReducers({
    counter:CounterReducer,
    movies:movies_reducer
})
export default rootReducer