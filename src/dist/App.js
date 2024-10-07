"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var router_1 = require("./router");
var app_header_1 = require("./components/app-header");
var app_footer_1 = require("./components/app-footer");
var app_player_bar_1 = require("./views/player/app-player-bar");
var store_1 = require("./store");
var player_1 = require("./views/player/store/player");
function App() {
    //获取某一首喜欢的歌曲
    var dispatch = store_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(player_1.fetchCurrentSongAction(2122308127));
    }, []);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(app_header_1["default"], null),
        react_1["default"].createElement(react_1.Suspense, { fallback: "loading..." },
            react_1["default"].createElement("div", { className: "main" }, react_router_dom_1.useRoutes(router_1["default"]))),
        react_1["default"].createElement(app_footer_1["default"], null),
        react_1["default"].createElement(app_player_bar_1["default"], null)));
}
exports["default"] = App;
