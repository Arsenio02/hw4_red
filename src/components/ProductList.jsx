import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    console.log(products);

    if (!products || !Array.isArray(products)) {
        return <div>Нет доступных товаров</div>;
    }

    return (
        <div>
            <h2>Список товаров</h2>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - ${product.price}</span>
                    <button onClick={() => dispatch(addToCart(product))}>Купить</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;