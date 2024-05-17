import React from 'react';
import './NavBar.css';
import menuIcon from '../../assets/images/menu.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="Logo" className="companylogo" />
            <ul className="nav-btns">
                <li className="menu-icon"><img src={menuIcon} alt="Menu" /></li>
                <li className="nav-btn"><button>Home</button></li>
                <li className="nav-btn"><button>About</button></li>
                <li className="nav-btn"><button>Products</button></li>
                <li className="nav-btn"><button>Services</button></li>
            </ul>
        </nav>
    );
}

export default NavBar;