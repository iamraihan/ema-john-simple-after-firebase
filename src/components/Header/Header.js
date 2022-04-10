import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <div className="logo">
                    <a href="/home"><img src={logo} alt="" /></a>

                </div>
                <div className="menu">
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>

        </nav>
    );
};

export default Header;