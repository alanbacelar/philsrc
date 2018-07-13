import React from 'react';
import IconButton from '../buttons/Icon';
import TvApi from '../../TvApi';

const Style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '20px',
    border: '1px solid #fff',
    margin: 'auto'
}

const ChannelControl = () => {
    const sendKey = key => TvApi.sendKey(key);

    const IconButtonStyle = {
        padding: '16px 8px'
    };

    return (
        <div className="control-media" style={Style}>
            <IconButton icon="plus" style={IconButtonStyle} onClick={sendKey.bind(this, 'ChannelStepUp')} />
            <IconButton icon="grip-horizontal" style={IconButtonStyle} />
            <IconButton icon="minus" style={IconButtonStyle} onClick={sendKey.bind(this, 'ChannelStepDown')} />
        </div>
    )
}

export default ChannelControl;
