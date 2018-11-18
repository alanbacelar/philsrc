import React from 'react';
import NavHeader from '../NavHeader';
import AppPackage from '../../../package.json';
// import VMasker from 'vanilla-masker';

const Style = {
    display: 'flex',
    flexDirection: 'column'
}

const PHISRC_IP_KEY = 'PHISRC_IP';

const SettingsControl = ({ open, onClose }) => {

    if (open) {
        const onSubmit = (e) => {
            e.preventDefault();
            const ip_value = document.getElementById('ip-input').value;

            if (ip_value) {
                localStorage.setItem(PHISRC_IP_KEY, ip_value);
                onClose();
            } else {
                alert('Invalid IP!');
            }
        }

        const ip = localStorage.getItem(PHISRC_IP_KEY) || null;

        return (
            <div className="container-full control-keys" style={Style}>
                <div className="container">
                    <NavHeader title="Settings" onClose={onClose} />

                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <label htmlFor="ip-input">TV IP Address:</label>
                            <input
                                id="ip-input"
                                type="text"
                                placeholder="192.168.0.3"
                                defaultValue={ip}
                                required
                                pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$" />

                            <button type="submit">Save</button>
                        </fieldset>
                    </form>

                    <h4>About the app</h4>
                    <div style={{ fontSize: '0.8em' }}>Version: {AppPackage.version}</div>
                </div>
            </div>
        )
    }

    return null;

}

SettingsControl.defaultProps = {
    open: false
}

export default SettingsControl;
