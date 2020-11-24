import React from 'react';
import './Card.css';

const Card = ({ category, description, image, price, title, onFavoriteClick, isFavorite, index, addBtnText, onAddToCartClick }) => (
    <div className="card_wrap">
        <p>{category}</p>
        <h1 className="title">{title}</h1>
        <img src={image} alt={category} />
        <p className="price">{price}$</p>
        <p className="description">{description}</p>
        <div
          id="favorite"
          onClick={() => {
            onFavoriteClick(index);
          }}
          className={isFavorite ? "isFavorite" : "notFavorite"}
        ></div>
        <button
        onClick={() => {
          onAddToCartClick(index);
        }}
        className="addToCart_btn"
        >{addBtnText}</button>
    </div>
)

export default Card;
