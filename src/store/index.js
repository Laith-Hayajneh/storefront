import { combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import categorie from './categories'
import product from './product'







let reducer = combineReducers({categorie,product});
const categories=()=>{
    return createStore(reducer,composeWithDevTools);

};
export default categories();




// import products from './products.js';
// import categories from './categories.js';
// import cart from './cart.js'

// const reducer = combineReducers({ products, categories, cart });

// const store = configureStore({ reducer });

// export default store;