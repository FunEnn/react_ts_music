"use strict";
exports.__esModule = true;
var store_1 = require("@/store");
var react_1 = require("react");
var antd_1 = require("antd");
var classnames_1 = require("classnames");
var style_1 = require("./style");
var TopBanner = function () {
    var _a;
    /** 定义内容的数据 */
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var bannerRef = react_1.useRef(null);
    var banners = store_1.useAppSelector(function (state) { return ({ banners: state.recommend.banners }); }, store_1.shallowEqualApp).banners;
    /** 事件处理函数 */
    function handleBeforeChange(from, to) {
        setCurrentIndex(-1);
    }
    function handleAfterChange(current) {
        setCurrentIndex(current);
    }
    function handlePrevClick() {
        var _a;
        (_a = bannerRef.current) === null || _a === void 0 ? void 0 : _a.prev();
    }
    function handleNextClick() {
        var _a;
        (_a = bannerRef.current) === null || _a === void 0 ? void 0 : _a.next();
    }
    /** 获取背景图片 */
    var bgImageUrl;
    if (currentIndex >= 0 && banners.length > 0) {
        bgImageUrl = ((_a = banners[currentIndex]) === null || _a === void 0 ? void 0 : _a.imageUrl) + '?imageView&blur=40x20';
    }
    return (react_1["default"].createElement(style_1.BannerWrapper, { style: { background: "url('" + bgImageUrl + "') center center / 6000px" } },
        react_1["default"].createElement("div", { className: "banner wrap-v2" },
            react_1["default"].createElement(style_1.BannerLeft, null,
                react_1["default"].createElement(antd_1.Carousel, { autoplay: true, dots: false, effect: "fade", ref: bannerRef, beforeChange: handleBeforeChange, afterChange: handleAfterChange }, banners.map(function (item) {
                    return (react_1["default"].createElement("div", { className: "banner-item", key: item.imageUrl },
                        react_1["default"].createElement("img", { className: "image", src: item.imageUrl, alt: item.typeTitle })));
                })),
                react_1["default"].createElement("ul", { className: "dots" }, banners.map(function (item, index) {
                    return (react_1["default"].createElement("li", { key: item.imageUrl },
                        react_1["default"].createElement("span", { className: classnames_1["default"]('item', {
                                active: index === currentIndex
                            }) })));
                }))),
            react_1["default"].createElement(style_1.BannerRight, null),
            react_1["default"].createElement(style_1.BannerControl, null,
                react_1["default"].createElement("button", { className: "btn left", onClick: handlePrevClick }),
                react_1["default"].createElement("button", { className: "btn right", onClick: handleNextClick })))));
};
exports["default"] = react_1.memo(TopBanner);
