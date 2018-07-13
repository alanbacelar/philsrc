import React from 'react';
import ColorButton from '../buttons/Color';
import TvApi from '../../TvApi';

const Style = {
    display: 'flex',
    width: 'auto',
    margin: '16px auto'
}

const ColorsControl = () => {
    const sendKey = key => TvApi.sendKey(key);

    return (
        <div className="control-colors" style={Style}>
            <ColorButton color="red" onClick={sendKey.bind(this, 'RedColour')} />
            <ColorButton color="green" onClick={sendKey.bind(this, 'GreenColour')} />
            <ColorButton color="yellow" onClick={sendKey.bind(this, 'YellowColour')} />
            <ColorButton color="blue" onClick={sendKey.bind(this, 'BlueColour')} />
        </div>
    )
}

export default ColorsControl;
