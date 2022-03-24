import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2>Logo</h2>
            <nav>
                <a href="/">shop</a>
                <a href="/">Items</a>
                <a href="/">Buy</a>
                <a href="/">Profile</a>
            </nav>
        </div>
    );
};

export default Header;