import React from 'react'
import './Button.css';

const Button = ({ id, category, onCategoryBtnClick }) => (
    <button
    key={id}
    onClick={(e) => onCategoryBtnClick(e)}
    className="categoty_btn">
        { category }
    </button>
);

export default Button;