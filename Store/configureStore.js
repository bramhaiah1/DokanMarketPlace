import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import uiReducer from './Reducers/ui';
import productsReducer from "./Reducers/ProductsReducers";
import productsReducer1 from "./Reducers/produc1reducer";
import OrderReducer from "./Reducers/OrderReducer";
import CartReducers from "./Reducers/CartReducers";
const configureStore = () => {
    let composeEnhancers = compose;

    if (__DEV__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    const rootReducer = combineReducers({
        products1:productsReducer1,
        products: productsReducer,
        cartItems: CartReducers,
        Order: OrderReducer,

        itemsCount: CartReducers,
        wishListItems: CartReducers,
        ui: uiReducer,
    });

    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

}
export default configureStore