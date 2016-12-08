import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            Hi! I am header.
        </header>
    );
};

export default Header;
