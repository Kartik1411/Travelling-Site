import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);

    // using use state for buttons
    const[button, setButton] = useState(true);

    // function for mobile view toggle button
    const handleClick = () => {
        setClick(!click);
    }

    // function for automatic disappear menu in mobile view when click a menu item
    const closeMobileMenu = () => {
        setClick(false);
    }

    // show button fuction
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect( () => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to='/' className='navbar-logo' onClick = {handleClick}>
                        DINO <i className="fab fa-typo3"></i>
                    </Link>

                    <div className="menu-icon" onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar;
