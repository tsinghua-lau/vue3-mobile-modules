/**
 *  @describes：时间格式化
 *  originVal类型：new Date
 *  type:1==>返回完整时分秒 else 年月日
 * */
const getTime = (originVal,type) => {
    const dt = new Date(originVal);

    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + '').padStart(2, '0');
    const d = (dt.getDate() + '').padStart(2, '0');

    const hh = (dt.getHours() + '').padStart(2, '0');
    const mm = (dt.getMinutes() + '').padStart(2, '0');
    const ss = (dt.getSeconds() + '').padStart(2, '0');

    if(type && type == 1){
        return `${y}-${m}-${d}`;
    }else{
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
        console.log("微信浏览器");
        return true;
    } else {
        console.log("不是微信浏览器");
        return false;
    }

}

/**
 *  @describes：url--Code
 *  
 * */
const getUrlCode = (paramName) => {
   return window.location.href.includes('code')
}

export {
    getTime,
    getUrlCode,
    isWx
}