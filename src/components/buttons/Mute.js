import React from 'react';
import withVibration from '../../helpers/withVibration';

class MuteButton extends React.Component {

    getCloseIcon() {
        if (this.props.off) {
            const close_style = {
                color: 'red',
                position: 'absolute',
                top: '20px',
                fontSize: '1.3em'
            };

            return (<span style={close_style}>X</span>)
        }

        return null;
    }

    render() {
        const style = this.props.style || {};
        const default_style = {
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            padding: '8px',
            position: 'relative'
        }

        const button_style = { ...default_style, ...style };

        return (
            <button type="button" style={button_style} onClick={withVibration(this.props.onClick.bind(this))}>
                <i className="fas fa-2x fa-volume-off"></i>
                {this.getCloseIcon()}
            </button>
        )
    }
}

export default MuteButton;
