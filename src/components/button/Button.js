import React from 'react'
import './Button.css';

const Button = ({ category }) => (
    <button className="categoty_btn">
        { category }
    </button>
);

export default Button;