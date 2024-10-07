"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var area_header_v1_1 = require("@/components/area-header-v1");
var store_1 = require("@/store");
var song_menu_item_1 = require("@/components/song-menu-item");
var HotRecommend = function () {
    var hotRecommends = store_1.useAppSelector(function (state) { return state.recommend; }, store_1.shallowEqualApp).hotRecommends;
    return (react_1["default"].createElement(style_1.RecommendWrapper, null,
        react_1["default"].createElement(area_header_v1_1["default"], { title: "\u70ED\u95E8\u63A8\u8350", keywords: ['华语', '流行', '摇滚', '民谣', '电子'], moreLink: "/discover/songs" }),
        react_1["default"].createElement("div", { className: "recommend-list" }, hotRecommends.map(function (item) {
            return (react_1["default"].createElement(song_menu_item_1["default"], { key: item.id, itemData: item }));
        }))));
};
exports["default"] = react_1.memo(HotRecommend);
