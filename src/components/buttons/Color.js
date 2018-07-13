import React from 'react';

const ColorButton = ({ color, onClick }) => {
    const Style = {
        backgroundColor: color,
        width: '55px',
        height: '16px',
        margin: '0 3px',
        borderRadius: '10px'
    }

    return (<button type="button" style={Style} onClick={onClick}></button>)
}

export default ColorButton;
