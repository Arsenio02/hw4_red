import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <h2>Корзина</h2>
            {cart.map(item => (
                <div key={item.id}>
                    {item.name} - ${item.price}
                </div>
            ))}
        </div>
    );
}

export default Cart;