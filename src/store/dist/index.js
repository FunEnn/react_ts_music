"use strict";
exports.__esModule = true;
exports.shallowEqualApp = exports.useAppDispatch = exports.useAppSelector = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var conter_1 = require("./modules/conter");
var recommend_1 = require("../views/discover/c-views/recommend/store/recommend");
var player_1 = require("../views/player/store/player");
var store = toolkit_1.configureStore({
    reducer: {
        counter: conter_1["default"],
        recommend: recommend_1["default"],
        player: player_1["default"]
    }
});
//useAppSelector的hook
exports.useAppSelector = react_redux_1.useSelector;
exports.useAppDispatch = react_redux_1.useDispatch;
exports.shallowEqualApp = react_redux_1.shallowEqual;
exports["default"] = store;
