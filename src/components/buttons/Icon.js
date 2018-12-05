import React from 'react';
import withVibration from '../../helpers/withVibration';

const IconButton = ({ icon, label, onClick, style, loading, loadingLabel }) => {

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

    if (loading) {
        return (
            <button type="button" style={button_style} disabled={true}>
                <i className={`fas fa-3x fa-${icon}`}></i>
                <small style={{ marginTop: '5px', fontSize: '1em' }}>{loadingLabel}</small>
            </button>
        )
    }

    return (
        <button type="button" style={button_style} onClick={withVibration(onClick)}>
            <i className={`fas fa-3x fa-${icon}`}></i>
            <small style={{marginTop: '5px', fontSize: '1em'}}>{label}</small>
        </button>
    )
}

IconButton.defaultProps = {
    style: {},
    loading: false
}

export default IconButton;
