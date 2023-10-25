import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartCount = useSelector(state => state.cart.length);

    return (
        <nav>
            <div>Навигационная панель</div>
            <div>Корзина: {cartCount} товаров</div>
        </nav>
    );
}

export default Navbar;