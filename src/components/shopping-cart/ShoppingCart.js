import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ title, price }) => (
    <div className="shopping-cart_wrap">
        <div className="cart_item">
            <span>{title}</span>
            <span className="cart-price">{price}$</span>
        </div>
    </div>
)

export default ShoppingCart;