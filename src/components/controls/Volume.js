import React from 'react';
import IconButton from '../buttons/Icon';
import MuteButton from '../buttons/Mute';
import TvApi from '../../TvApi';

const Style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '20px',
    border: '1px solid #fff',
    margin: 'auto'
}

class VolumeControl extends React.Component {

    state = { mute: false };

    sendKey(key, mute) {
        TvApi.sendKey(key);
        this.setState({ mute });
    }

    mute() {
        TvApi.sendKey('Mute');
        const mute = !this.state.mute;
        this.setState({ mute });
    }

    render() {
        const IconButtonStyle = {
            padding: '16px 8px'
        };

        return (
            <div className="control-media" style={Style}>
                <IconButton icon="plus" style={IconButtonStyle} onClick={this.sendKey.bind(this, 'VolumeUp', false)} />
                <MuteButton style={IconButtonStyle} off={this.state.mute} onClick={this.mute.bind(this)} />
                <IconButton icon="minus" style={IconButtonStyle} onClick={this.sendKey.bind(this, 'VolumeDown', false)} />
            </div>
        )
    }

}

export default VolumeControl;
