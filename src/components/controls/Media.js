import React from 'react';
import MoveControl from './Move';
import VolumeControl from './Volume';
import ChannelControl from './Channel';

const Style = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto'
}

const MediaControl = () => {
    return (
        <div className="control-center"  style={Style}>
            <VolumeControl />
            <MoveControl />
            <ChannelControl />
        </div>
    )
}

export default MediaControl;
