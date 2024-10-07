"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var area_header_v1_1 = require("@/components/area-header-v1");
var store_1 = require("@/store");
var top_ranking_item_1 = require("../top-ranking-item");
var TopRanking = function () {
    var _a = store_1.useAppSelector(function (state) { return state.recommend; }, store_1.shallowEqualApp).rankings, rankings = _a === void 0 ? [] : _a;
    return (react_1["default"].createElement(style_1.RankingWrapper, null,
        react_1["default"].createElement(area_header_v1_1["default"], { title: "\u699C\u5355", moreLink: "/discover/toplist" }),
        react_1["default"].createElement("div", { className: "content" }, rankings.map(function (item) {
            return react_1["default"].createElement(top_ranking_item_1["default"], { key: item.id, itemData: item });
        }))));
};
exports["default"] = react_1.memo(TopRanking);
