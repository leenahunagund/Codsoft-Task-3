import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cart, removeFromCart }) {
    const total = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-group mb-3">
                    {cart.map((product, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                {product.name} - ${product.price}
                            </span>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeFromCart(product)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <h5>Total: ${total}</h5>
        </div>
    );
}

export default ShoppingCart;
