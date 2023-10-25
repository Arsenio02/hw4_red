import React, { useState, useEffect } from 'react';
import Navbar from "./shop/navbar.jsx";
import ProductList from "./shop/ProductList.jsx";
import productsShop from "./shop/productsShop.json";

function App() {
    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsShop);
    }, []);

    const addToCart = (product) => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className="app">
            <Navbar cartCount={cartCount} />
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
}

export default App;