import React from 'react';
import './TransformBtn.css';

const nameBtn = ['grid', 'list', 'normal'];
const TransformBtn = ({ onTransformBtnClick }) => (
    <div className="transform_btn">
        {nameBtn.map((el, i) => <button
            key={i}
            className={el}
            onClick={(e) => onTransformBtnClick(e)}
        >{el}</button>)}
    </div>
)

export default TransformBtn;