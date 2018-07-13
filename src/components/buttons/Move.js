import React from 'react';

const MoveButton = ({ direction, onClick, style }) => {
    const default_style = {
        color: '#fff',
        padding: '0 23px',
        margin: 0
    }

    const button_style = { ...default_style, ...style };

    return (
        <button type="button" style={button_style} onClick={onClick}>
            <i className={`fas fa-5x fa-caret-${direction}`}></i>
        </button>
    )
}

MoveButton.defaultProps = {
    direction: 'up',
    style: {}
}

export default MoveButton;
