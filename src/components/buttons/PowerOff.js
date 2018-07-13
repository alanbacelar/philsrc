import React from 'react';

const PowerOff = ({ onClick }) => {
    return (
        <button type="button" style={{ color: 'red', margin: 'auto' }} onClick={onClick}>
            <i className="fas fa-2x fa-power-off"></i>
        </button>
    )
}

export default PowerOff;
