"use strict";
exports.__esModule = true;
exports.getSongLyric = exports.getSongDetail = void 0;
var service_1 = require("@/service");
function getSongDetail(id) {
    return service_1["default"].get({
        url: '/song/detail',
        params: {
            ids: id
        }
    });
}
exports.getSongDetail = getSongDetail;
function getSongLyric(id) {
    return service_1["default"].get({
        url: '/lyric',
        params: {
            id: id
        }
    });
}
exports.getSongLyric = getSongLyric;
