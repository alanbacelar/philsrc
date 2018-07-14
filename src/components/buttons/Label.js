import React from 'react';
import withVibration from '../../helpers/withVibration';

const LabelButton = ({ label, onClick, style }) => {
    const default_style = {
        color: '#fff',
        padding: '8px',
        fontSize: '1.2em'
    }

    const button_style = { ...default_style, ...style };

    return (
        <button type="button" style={button_style} onClick={withVibration(onClick)}>
            {label}
        </button>
    )
}

LabelButton.defaultProps = {
    style: {}
}

export default LabelButton;
