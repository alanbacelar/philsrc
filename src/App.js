import React, { Component } from 'react';
import './App.css';

import PowerOff from './components/buttons/PowerOff';
import IconButton from './components/buttons/Icon';

import ColorsControl from './components/controls/Colors';
import MenuControl from './components/controls/Menu';
import MediaControl from './components/controls/Media';
import KeysControl from './components/controls/Keys';
import SettingsControl from './components/controls/Settings';

import TvApi from './TvApi';
import FindTv from './helpers/findtv';

class App extends Component {
    state = { openKeysControl: false, openSettingsControl: false, error: null, finding: false };

    toggleKeysControl() {
        this.setState({ openKeysControl: !this.state.openKeysControl });
    }

    toggleSettingsControl() {
        this.setState({ openSettingsControl: !this.state.openSettingsControl });
    }

    componentDidMount() {
        this.syncTV();
        this.findTv();
    }

    async findTv() {
        try {
            this.setState({ finding: true });
            await FindTv.findAndSetTv();
        } catch (error) {

        } finally {
            this.setState({ finding: false });
        }
    }

    async syncTV() {
        console.info('syncing tv...');

        try {
            const response = await TvApi.getVolume();

            if (response.ok) {
                this.setState({ error: null });
            } else {
                this.setState({ error: "Can't connect to TV" });
            }
        } catch (error) {
            this.findTv();
            this.setState({ error: "Can't connect to TV" });
            console.error(error);
        } finally {
            setTimeout(() => {
                this.syncTV();
            }, 3000);
        }
    }

    getErrorMessage() {
        if (this.state.error) {
            const ErrorMessageStyle ={
                position: 'fixed',
                width: '100%',
                padding: '8px 0',
                textAlign: 'center',
                left: 0,
                top: 0,
                backgroundColor: 'red',
                color: '#fff',
                fontSize: '1em'
            }

            return (
                <div style={ErrorMessageStyle}>
                    <small>{this.state.error}</small>
                </div>
            )
        }

        return null;
    }

    render() {
        const sendKey = key => TvApi.sendKey(key);

        return (
            <div className="app">
                <PowerOff onClick={sendKey.bind(this, 'Standby')} />

                <MenuControl />
                <ColorsControl />
                <MediaControl />

                <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                    <IconButton icon="undo-alt" label="back" onClick={sendKey.bind(this, 'Back')} />
                    <IconButton icon="th" label="keys" onClick={this.toggleKeysControl.bind(this)} />
                    <IconButton icon="cog" label="Settings" onClick={this.toggleSettingsControl.bind(this)} />
                    <IconButton icon="sync" label="Sync" loading={this.state.finding} loadingLabel="Waiting..." onClick={this.findTv.bind(this)} />
                </div>

                <KeysControl open={this.state.openKeysControl} onClose={this.toggleKeysControl.bind(this)} />
                <SettingsControl open={this.state.openSettingsControl} onClose={this.toggleSettingsControl.bind(this)} />

                {this.getErrorMessage()}
            </div>
        );
    }
}

export default App;
