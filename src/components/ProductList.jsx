import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Список товаров</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => dispatch(addToCart(product))}>Купить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
