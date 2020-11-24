import React from 'react';

import './CardList.css'

const CardList = ({ children }) => {
        return (
        <div className="card-list_wrap">{ children }</div>
        )
}

export default CardList;