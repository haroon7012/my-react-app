import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Social Manager Pro</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
