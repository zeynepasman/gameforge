import './index.styles.scss';
import React from 'react';

export default function Dropdown() {
    return (
        <ul>
            <li className="dropdown">
                <img
                    className="dropbtn"
                    src='assets/images/profile.png'
                    alt='user'
                    width={50}
                />
                <div className="dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </div>
            </li>
        </ul>
    );
}
