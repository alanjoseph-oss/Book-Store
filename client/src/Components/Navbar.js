import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bookstore</h1>
            <h2>Welcome to Book Store</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add-book">Add Book</Link>
            </div>
        </nav>
    );
};

export default Navbar;
