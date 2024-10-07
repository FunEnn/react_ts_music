"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var local_data_1 = require("@/assets/data/local_data");
var react_router_dom_1 = require("react-router-dom");
var NavBar = function () {
    return (react_1["default"].createElement(style_1.NavWrapper, null,
        react_1["default"].createElement("div", { className: "nav wrap-v1" }, local_data_1.discoverMenu.map(function (item) {
            return (react_1["default"].createElement("div", { className: "item", key: item.link },
                react_1["default"].createElement(react_router_dom_1.NavLink, { to: item.link }, item.title)));
        }))));
};
exports["default"] = react_1.memo(NavBar);
