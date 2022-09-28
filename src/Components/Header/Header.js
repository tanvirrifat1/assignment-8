import React from 'react';
import logo from '../../img/fitness.webp'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img className='img' src={logo} alt="" />
            <h1>FITNESS-CLUB</h1>
        </nav>
    );
};

export default Header;