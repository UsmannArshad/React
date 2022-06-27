import {legacy_createStore,applyMiddleware,compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'
const ReduxStore=()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store=legacy_createStore(reducers,composeEnhancers(applyMiddleware(promiseMiddleware)));
    return store
}
export default ReduxStore