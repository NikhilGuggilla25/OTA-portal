import React from 'react';
import './NavBar.css';
import menuIcon from '../../assets/images/menu.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="Logo" className="companylogo" />
            <ul className="nav-btns">
                <li className="menu-icon"><img src={menuIcon} alt="Menu" /></li>
                <li className="nav-btn"><button className='btn-in-nav'>Home</button></li>
                <li className="nav-btn"><button className='btn-in-nav'>About</button></li>
                <li className="nav-btn"><button className='btn-in-nav'>Products</button></li>
                <li className="nav-btn"><button className='btn-in-nav'>Services</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;