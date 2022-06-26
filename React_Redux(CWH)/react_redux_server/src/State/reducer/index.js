import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
const reducers=combineReducers({
    Users:UserReducer
})
export default reducers