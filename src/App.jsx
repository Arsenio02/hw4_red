// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import cartReducer from './redux/cartSlice';
import products from './components/products.json';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <ProductList products={products.products} />
                <Cart />
            </div>
        </Provider>
    );
}

export default App;