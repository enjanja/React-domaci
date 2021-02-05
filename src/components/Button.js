import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn--large']

export const Button = ({
    children,
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0];//ako ne dodelimo dugmetu sami stil,
    //izavbrace stil na [0] poziciji u nizu STYLEs

    const checkButtonSize = SIZES.includes(buttonSize) ?
    buttonSize : SIZES[0];//ako ne dodelimo dugmetu sami velicinu,
    //izavbrace stil na [0] poziciji u nizu SIZES

    return (
        <Link to="/sign-up" clasName="btn-moblie">
            <button 
                clasName={'btn ${checkButtonStyle} ${checkButtonSize}'}
                onClick={onClick}
                type={type}
            >
                {children}
                {/* Sta god da napisemo u dugme to ce da prikaze kao txt dugmeta  */}
            </button>
        </Link>
    )
};