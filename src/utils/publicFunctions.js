/**
 *  @describes：时间格式化
 *  originVal类型：new Date
 *  type:1==>返回完整时分秒 else 年月日
 * */
const getTime = (originVal, type) => {
    const dt = new Date(originVal);

    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + '').padStart(2, '0');
    const d = (dt.getDate() + '').padStart(2, '0');

    const hh = (dt.getHours() + '').padStart(2, '0');
    const mm = (dt.getMinutes() + '').padStart(2, '0');
    const ss = (dt.getSeconds() + '').padStart(2, '0');

    if (type && type == 1) {
        return `${y}-${m}-${d}`;
    } else {
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    }
};

/**
 *  @describes：是否是微信访问
 *
 * */
const isWx = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        console.log('微信浏览器');
        return true;
    } else {
        console.log('不是微信浏览器');
        return false;
    }
};

/**
 *  @describes：url--Code
 *
 * */
const getUrlCode = paramName => {
    return window.location.href.includes('code');
};

/**
 *  @describes：获取浏览器url中指定参数
 *  例:code
 *
 * */
const getUrlParam = name => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let url = window.location.href.split('#')[0];
    let search = url.split('?')[1];
    if (search) {
        var r = search.substr(0).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
    } else return null;
};

/**
 *  @describes：获取用户信息
 *  
 *
 * */
const getCode = () => {
    let code = getUrlParam('code'); // 截取路径中的code
    if (code == null || code === '') {
        // const local = window.location.href;
        const local = '34826j509w.goho.co';
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4534b55934ec6ad4&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
        code = getUrlParam('code');
        return code;
    } else {
        //getOpenId(code); //把code传给后台获取用户信息
    }
};
export {
    getTime,
    getUrlCode,
    isWx,
    getUrlParam,
    getCode
};