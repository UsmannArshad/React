import {combineReducers} from 'redux'
import Post from './posts_reducer'
import User from './users_reducer'
const reducers=combineReducers({
Post,
User
})
export default reducers