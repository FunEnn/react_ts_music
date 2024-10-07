"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var area_header_v1_1 = require("@/components/area-header-v1");
var antd_1 = require("antd");
var store_1 = require("@/store");
var new_album_item_1 = require("@/components/new-album-item");
var NewAlbum = function () {
    var _a;
    /** 定义内部数据 */
    var bannerRef = react_1.useRef(null);
    /** Redux中获取数据 */
    var newAlbums = store_1.useAppSelector(function (state) { return state.recommend; }).newAlbums;
    /** 事件处理函数 */
    /** 事件处理函数 */
    function handlePrevClick() {
        var _a;
        (_a = bannerRef.current) === null || _a === void 0 ? void 0 : _a.prev();
    }
    function handleNextClick() {
        var _a;
        (_a = bannerRef.current) === null || _a === void 0 ? void 0 : _a.next();
    }
    return (react_1["default"].createElement(style_1.AlbumWrapper, null,
        react_1["default"].createElement(area_header_v1_1["default"], { title: "\u65B0\u789F\u4E0A\u67B6", moreLink: "/discover/album" }),
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("button", { className: "sprite_02 arrow arrow-left", onClick: handlePrevClick }),
            react_1["default"].createElement("div", { className: "banner" },
                react_1["default"].createElement(antd_1.Carousel, { ref: bannerRef, dots: false, speed: 1500 }, (_a = [0, 1]) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                    return (react_1["default"].createElement("div", { key: item },
                        react_1["default"].createElement("div", { className: "album-list" }, newAlbums.slice(item * 5, (item + 1) * 5).map(function (album) {
                            return react_1["default"].createElement(new_album_item_1["default"], { key: album.id, itemData: album });
                        }))));
                }))),
            react_1["default"].createElement("button", { className: "sprite_02 arrow arrow-right", onClick: handleNextClick }))));
};
exports["default"] = react_1.memo(NewAlbum);
