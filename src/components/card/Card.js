import React from 'react';
import './Card.css';

const Card = ({ id, category, description, image, price, title, onFavoriteClick, isFavorite }) => (
    <div className="card_wrap">
        <p>{category}</p>
        <h1 className="title">{title}</h1>
        <img src={image} alt={category} />
        <p>{price}$</p>
        <p className="description">{description}</p>
        <div
          id="favorite"
          onClick={() => {
            onFavoriteClick();
          }}
          className={isFavorite ? "isFavorite" : "notFavorite"}
        ></div>
    </div>
)

export default Card;
