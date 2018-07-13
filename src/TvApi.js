const PHISRC_IP_KEY = 'PHISRC_IP';

class TvApi {

    getBaseURL() {
        const IP = localStorage.getItem(PHISRC_IP_KEY) || null;
        return `http://${IP}:1925/1`;
    }

    async doRequest(type, path, params) {
        const url = this.getBaseURL();

        return fetch(url + path, {
            method: type,
            body: JSON.stringify(params)
        });
    }

    async sendKey(key) {
        console.info('sending key:', key);
        return this.doRequest('post', '/input/key', { key });
    }

    async getVolume() {
        console.info('fetching volume..');
        return this.doRequest('get', '/audio/volume');
    }

}

export default new TvApi();
