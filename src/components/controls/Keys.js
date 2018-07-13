import React from 'react';
import DigitsControl from '../controls/Digits';
import NavHeader from '../NavHeader';

const Style = {
    display: 'flex',
    flexDirection: 'column'
}

const KeysControl = ({ open, onClose }) => {
    if (open) {
        return (
            <div className="container-full control-keys" style={Style}>
                <div className="container">
                    <NavHeader title="" onClose={onClose} />
                    <DigitsControl />
                </div>
            </div>
        )
    }

    return null;
}

KeysControl.defaultProps = {
    open: false
}

export default KeysControl;
