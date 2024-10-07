"use strict";
exports.__esModule = true;
exports.formatTime = exports.getImageSize = exports.formatCount = void 0;
function formatCount(count) {
    if (count > 1000000) {
        return Math.floor(count / 10000) + '万';
    }
    else {
        return count;
    }
}
exports.formatCount = formatCount;
function getImageSize(imageUrl, width, height) {
    if (height === void 0) { height = width; }
    return imageUrl + ("?param=" + width + "y" + height);
}
exports.getImageSize = getImageSize;
function formatTime(time) {
    //1. 将毫秒转成秒钟
    var timeSeconds = time / 1000;
    //2. 获取分钟和秒钟
    // 100s => 01:40
    var minue = Math.floor(timeSeconds / 60);
    var second = Math.floor(timeSeconds) % 60;
    var formatMinue = minue < 10 ? "0" + minue : minue;
    var formatSecond = second < 10 ? "0" + second : second;
    return formatMinue + ":" + formatSecond;
}
exports.formatTime = formatTime;
