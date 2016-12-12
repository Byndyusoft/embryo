import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/sample/1">Sample #1</Link>|
                <Link to="/sample/2/hi">Sample #2</Link>
            </nav>
            Hi! I am header.
        </header>
    );
};

export default Header;
