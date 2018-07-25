import axios from 'axios'

export default{
    get: function (url, params, success, failure, win) {
        return axios('GET', url, params, success, failure, win);
    },
}