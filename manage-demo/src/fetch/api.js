import axios from 'axios';
// import store from '../store/index'

// import promise from 'es6-promise'
// promise.ployfill()
// const jsonp = require('jsonp');



// 取类型
function getType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 过滤null值
function filterNull (obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
        if (getType(obj[key]) === 'string') {
            obj[key] = obj[key].trim();
        } else if (getType(obj[key]) === 'object') {
            obj[key] = filterNull(obj[key]);
        } else if (getType(obj[key]) === 'array') {
            obj[key] = filterNull(obj[key]);
        }
    }
    return obj;
}

function apiAxios (method, url, param, success, failure, win) {
    if (param) {
        param = filterNull(param);
    }

    url += '';
  // 调用后台
    var ax = axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? param : null,
        params: method === 'GET' || method === 'DELETE' ? param : null,
        withCredentials: true,
        timeout: 10 * 20 * 1000,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });

  // 执行成功
    ax.then(res => {
        window.console.debug('res', res.data);
        if (success) {
            success(res.data);
        }
    });
}
// 对外提供调用方法
export default {
    get: function (url, params, success, failure, win) {
        return apiAxios('GET', url, params, success, failure, win);
    },
    post: function (url, params, success, failure, win) {
        return apiAxios('POST', url, params, success, failure, win);
    },
    put: function (url, params, success, failure, win) {
        return apiAxios('PUT', url, params, success, failure, win);
    },
    delete: function (url, params, success, failure, win) {
        return apiAxios('DELETE', url, params, success, failure, win);
    },

};
