"use strict";
exports.__esModule = true;
exports.getArtistList = exports.getPlaylistDetail = exports.getNewAlbum = exports.getHotRecommend = exports.getBanners = void 0;
var service_1 = require("@/service");
function getBanners() {
    return service_1["default"].get({
        url: '/banner'
    });
}
exports.getBanners = getBanners;
function getHotRecommend(limit) {
    if (limit === void 0) { limit = 30; }
    return service_1["default"].get({
        url: '/personalized',
        params: {
            limit: limit
        }
    });
}
exports.getHotRecommend = getHotRecommend;
function getNewAlbum() {
    return service_1["default"].get({
        url: '/album/newest'
    });
}
exports.getNewAlbum = getNewAlbum;
function getPlaylistDetail(id) {
    return service_1["default"].get({
        url: '/playlist/detail',
        params: {
            id: id
        }
    });
}
exports.getPlaylistDetail = getPlaylistDetail;
function getArtistList(limit) {
    if (limit === void 0) { limit = 30; }
    return service_1["default"].get({
        url: '/artist/list',
        params: {
            limit: limit
        }
    });
}
exports.getArtistList = getArtistList;
