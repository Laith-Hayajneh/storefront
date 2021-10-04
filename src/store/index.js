import { combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import categorie from './categories'
import product from './product'
import cart from './cart'






let reducer = combineReducers({categorie,product,cart});
console.log(reducer);

const store =()=>{
    return createStore(reducer,composeWithDevTools())
}

// const store =()=>{
//     return createStore (reducer,composeWithDevTools);

// };
export default store ();




// import products from './products.js';
// import categories from './categories.js';
// import cart from './cart.js'

// const reducer = combineReducers({ products, categories, cart });

// const store = configureStore({ reducer });

// export default store;