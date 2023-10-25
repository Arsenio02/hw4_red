import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import products from './products.json';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <ProductList products={products} />
            </div>
        </Provider>
    );
}

export default App;