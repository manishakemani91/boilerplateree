// Header.js

import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
