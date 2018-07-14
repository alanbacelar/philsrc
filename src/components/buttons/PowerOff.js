import React from 'react';
import withVibration from '../../helpers/withVibration';

const PowerOff = ({ onClick }) => {
    return (
        <button type="button" style={{ color: 'red', margin: 'auto' }} onClick={withVibration(onClick)}>
            <i className="fas fa-2x fa-power-off"></i>
        </button>
    )
}

export default PowerOff;
