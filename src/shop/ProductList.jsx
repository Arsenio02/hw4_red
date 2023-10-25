import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product._id} className="product">
                    <img src={product.picture} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Купить</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;