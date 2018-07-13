import React from 'react';
import MoveButton from '../buttons/Move';
import LabelButton from '../buttons/Label';
import TvApi from '../../TvApi';

const Style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto'
}

const ColumnStyle = {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
}

const MoveControl = () => {
    const sendKey = key => TvApi.sendKey(key);

    return (
        <div className="control-menu" style={Style}>
            <div style={ColumnStyle}>
                <MoveButton direction="up" label="home" onClick={sendKey.bind(this, 'CursorUp')} />
            </div>

            <div style={ColumnStyle}>
                <MoveButton direction="left" label="adjust" onClick={sendKey.bind(this, 'CursorLeft')} />
                <LabelButton label="OK" onClick={sendKey.bind(this, 'Confirm')} />
                <MoveButton direction="right" label="source" onClick={sendKey.bind(this, 'CursorRight')} />
            </div>

            <div style={ColumnStyle}>
                <MoveButton direction="down" label="options" onClick={sendKey.bind(this, 'CursorDown')} />
            </div>
        </div>
    )
}

export default MoveControl;
