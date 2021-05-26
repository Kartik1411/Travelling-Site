// styled component for button

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// creating array for button styles
const STYLES = ['btn--primary', 'btn--outline'];

// creting array for size of button
const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // defining style for button
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // defining size for the button
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

