import axios from 'axios';
const PHISRC_IP_KEY = 'PHISRC_IP';

function getLocalIPs() {
    return new Promise(function (resolve, reject) {
        var ips = [];
        var pc = new window.webkitRTCPeerConnection({
            iceServers: [] // Don't specify any stun/turn servers, otherwise you will also find your public IP addresses.
        });

        pc.createDataChannel(''); // Add a media line, this is needed to activate candidate gathering.
        pc.onicecandidate = function (e) { // onicecandidate is triggered whenever a candidate has been found.
            if (!e.candidate) { // Candidate gathering completed.
                resolve(ips);
                return;
            }

            var ip = /^candidate:.+ (\S+) \d+ typ/.exec(e.candidate.candidate)[1];
            if (ips.indexOf(ip) === -1 && (ip.indexOf('192.168.') > -1 || ip.indexOf('172.16.') > -1 || ip.indexOf('10.0.') > -1)) {
                ips.push(ip);
            }
        };
        pc.createOffer(function (sdp) {
            pc.setLocalDescription(sdp);
        }, function onerror() { });
    });
}

const findAndSetTv = async () => {
    return getLocalIPs().then(function (result) {
        var ip = result[0];
        var parts = ip.split('.');
        parts.pop();

        var addresses = [];

        for (var i = 2; i < 255; i++) {
            addresses.push(parts.join('.') + '.' + i);
        }

        Promise.all(addresses.map(function (address) {
            return axios("http://" + address + ":1925/1/system", {
                timeout: 1000
            }).then(function (result) {
                result.data.address = address;
                localStorage.setItem(PHISRC_IP_KEY, address);
                return result.data;
            }).catch(function () { });
        }));
    });

}


export default {
    findAndSetTv
}
