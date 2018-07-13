import React from 'react';
import IconButton from '../buttons/Icon';
import TvApi from '../../TvApi';

const Style = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto'
}

const MenuControl = () => {
    const sendKey = key => TvApi.sendKey(key);

    return (
        <div className="control-menu" style={Style}>
            <IconButton icon="home" label="home" onClick={sendKey.bind(this, 'Home')} />
            <IconButton icon="sign-in-alt" label="source" onClick={sendKey.bind(this, 'Source')} />
            <IconButton icon="sliders-h" label="adjust" onClick={sendKey.bind(this, 'Adjust')} />
            <IconButton icon="list-ul" label="options" onClick={sendKey.bind(this, 'Options')} />
            <IconButton icon="closed-captioning" label="cc" onClick={sendKey.bind(this, 'Subtitle')} />
            <IconButton icon="tv" label="exit" onClick={sendKey.bind(this, 'WatchTV')} />
        </div>
    )
}

export default MenuControl;
