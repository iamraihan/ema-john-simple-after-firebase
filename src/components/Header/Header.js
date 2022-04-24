import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <div className='header'>
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>

                </div>
                <div className="menu">
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ? <button onClick={handleSingOut}>Sign Out</button> :
                            <Link to="/login">Login</Link>}
                </div>
            </div>

        </nav>
    );
};

export default Header;