import './Dropdown.scss';
import React from 'react';

export default function Dropdown() {
    return (<li className="dropdown">
        <a className="dropbtn"></a>
        <div className="dropdown-content">
            <a href="#">Account</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
        </div>
    </li>);
}