import React from 'react';
import DigitButton from '../buttons/Digit';
import TvApi from '../../TvApi';

const Style = {
    width: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 'auto',
    alignItems: 'flex-start',
    alignContent: 'space-between'
}

const SmallDigitStyle = {
    fontSize: '0.9em'
}

const DigitsControl = () => {
    const sendKey = key => TvApi.sendKey(key);

    return (
        <div className="control-digits" style={Style}>
            <DigitButton label="1" onClick={sendKey.bind(this, 'Digit1')} />
            <DigitButton label="2" onClick={sendKey.bind(this, 'Digit2')} />
            <DigitButton label="3" onClick={sendKey.bind(this, 'Digit3')} />
            <DigitButton label="4" onClick={sendKey.bind(this, 'Digit4')} />
            <DigitButton label="5" onClick={sendKey.bind(this, 'Digit5')} />
            <DigitButton label="6" onClick={sendKey.bind(this, 'Digit6')} />
            <DigitButton label="7" onClick={sendKey.bind(this, 'Digit7')} />
            <DigitButton label="8" onClick={sendKey.bind(this, 'Digit8')} />
            <DigitButton label="9" onClick={sendKey.bind(this, 'Digit9')} />
            <DigitButton label="cc" onClick={sendKey.bind(this, '')} style={SmallDigitStyle} />
            <DigitButton label="0" onClick={sendKey.bind(this, 'Digit0')} />
            <DigitButton label="." onClick={sendKey.bind(this, 'Dot')} />
        </div>
    )
}

export default DigitsControl;
