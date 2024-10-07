"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var format_1 = require("@/utils/format");
var store_1 = require("@/store");
var player_1 = require("@/views/player/store/player");
var TopRankingItem = function (props) {
    var itemData = props.itemData;
    var _a = itemData.tracks, tracks = _a === void 0 ? [] : _a;
    var dispatch = store_1.useAppDispatch();
    function handlePlayClick(id) {
        dispatch(player_1.fetchCurrentSongAction(id));
    }
    return (react_1["default"].createElement(style_1.RankingItemWrapper, null,
        react_1["default"].createElement("div", { className: "header" },
            react_1["default"].createElement("div", { className: "image" },
                react_1["default"].createElement("img", { src: format_1.getImageSize(itemData.coverImgUrl, 80), alt: "" }),
                react_1["default"].createElement("a", { href: "", className: "sprite_cover" })),
            react_1["default"].createElement("div", { className: "info" },
                react_1["default"].createElement("div", { className: "name" }, itemData.name),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("button", { className: "sprite_02 btn play" }),
                    react_1["default"].createElement("button", { className: "sprite_02 btn favor" })))),
        react_1["default"].createElement("div", { className: "list" }, tracks.slice(0, 10).map(function (item, index) {
            return (react_1["default"].createElement("div", { className: "item", key: item.id },
                react_1["default"].createElement("div", { className: "index" }, index + 1),
                react_1["default"].createElement("div", { className: "info" },
                    react_1["default"].createElement("div", { className: "name" }, item.name),
                    react_1["default"].createElement("div", { className: "operator" },
                        react_1["default"].createElement("button", { className: "btn sprite_02 play", onClick: function () { return handlePlayClick(item.id); } }),
                        react_1["default"].createElement("button", { className: "btn sprite_icon2 add" }),
                        react_1["default"].createElement("button", { className: "btn sprite_02 favor" })))));
        })),
        react_1["default"].createElement("div", { className: "footer" },
            react_1["default"].createElement("a", { href: "#/discover/ranking" }, "\u67E5\u770B\u5168\u90E8>"))));
};
exports["default"] = react_1.memo(TopRankingItem);
