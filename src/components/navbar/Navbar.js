import React from 'react';
import "./Navbar.css"

function Navbar(props) {
    return (
        <li onClick={() => props.action(props.property)}>{props.title}</li>
    );
}

export default Navbar;

