"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var header_titles_json_1 = require("@/assets/data/header-titles.json");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var AppHeader = function () {
    function showItem(item) {
        if (item.type === 'path') {
            return (react_1["default"].createElement(react_router_dom_1.NavLink, { to: item.link, className: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? 'active' : undefined;
                } },
                item.title,
                react_1["default"].createElement("i", { className: "icon sprite_01" })));
        }
        else {
            return (react_1["default"].createElement("a", { href: item.link, target: "_blank", rel: "noreferrer" }, item.title));
        }
    }
    return (react_1["default"].createElement(style_1.HeaderWrapper, null,
        react_1["default"].createElement("div", { className: "content wrap-v1" },
            react_1["default"].createElement(style_1.HeaderLeft, null,
                react_1["default"].createElement("a", { className: "logo sprite_01", href: "/" }, "\u7F51\u6613\u4E91"),
                react_1["default"].createElement("div", { className: "title-list" }, header_titles_json_1["default"].map(function (item) {
                    return (react_1["default"].createElement("div", { className: "item", key: item.title }, showItem(item)));
                }))),
            react_1["default"].createElement(style_1.HeaderRight, null,
                react_1["default"].createElement(antd_1.Input, { className: "search", placeholder: "\u97F3\u4E50/\u89C6\u9891/\u7535\u53F0/\u7528\u6237", prefix: react_1["default"].createElement(icons_1.SearchOutlined, null) }),
                react_1["default"].createElement("span", { className: "center" }, "\u521B\u4F5C\u8005\u4E2D\u5FC3"),
                react_1["default"].createElement("span", { className: "login" }, "\u767B\u5F55"))),
        react_1["default"].createElement("div", { className: "divider" })));
};
exports["default"] = react_1.memo(AppHeader);
