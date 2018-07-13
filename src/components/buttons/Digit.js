import React from 'react';

const DigitButton = ({ label, onClick, style }) => {

    const default_style = {
        color: '#fff',
        width: '80px',
        height: '80px',
        fontSize: '3em'
    }

    const button_style = { ...default_style, ...style };

    return (
        <button type="button" style={button_style} onClick={onClick}>
            {label}
        </button>
    )
}

DigitButton.defaultProps = {
    style: {}
}

export default DigitButton;
