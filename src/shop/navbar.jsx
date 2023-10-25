import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div className="navbar">
            <div>My Shopping App</div>
            <div>Cart ({cartCount})</div>
        </div>
    );
};

export default Navbar;
