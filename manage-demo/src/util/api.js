// 对外提供调用方法
export default {
    getHeight: function () {
        let h = window.innerHeight;
        window.console.log('h', h);
        if (h >= 1020) {
            return window.innerHeight - 295;
        }
        if (h >= 860) {
            return window.innerHeight - 313;
        }
        if (h >= 725) {
            return window.innerHeight - 275;
        }
        if (h >= 563) {
            return window.innerHeight - 295;
        }
        return window.innerHeight - 300;
    }
}