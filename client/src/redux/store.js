import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})


const middleware = [thunk];  // initialise the middleware as a array

const store = createStore(

    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;