import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const itemCount = useSelector((state) => state.itemCount);

    return (
        <div>
            <h3>Навигационная панель</h3>
            <p>Товаров в корзине: {itemCount}</p>
        </div>
    );
};

export default Navbar;
