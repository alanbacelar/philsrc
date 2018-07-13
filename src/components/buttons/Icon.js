import React from 'react';

const IconButton = ({ icon, label, onClick, style }) => {
    const default_style = {
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: '8px'
    }

    const button_style = { ...default_style, ...style };

    return (
        <button type="button" style={button_style} onClick={onClick}>
            <i className={`fas fa-lg fa-${icon}`}></i>
            <small style={{marginTop: '5px', fontSize: '0.65em'}}>{label}</small>
        </button>
    )
}

IconButton.defaultProps = {
    style: {}
}

export default IconButton;
