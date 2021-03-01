import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    const classes = [
        'custom-button',
        isGoogleSignIn && 'google-sign-in',
        inverted && 'inverted'
    ]
        .filter(c => !!c)
        .join(' ');
    return (
        <button
            className={classes} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;