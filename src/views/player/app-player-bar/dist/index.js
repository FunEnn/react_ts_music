"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var store_1 = require("@/store");
var format_1 = require("@/utils/format");
var handle_player_1 = require("@/utils/handle-player");
var player_1 = require("../store/player");
var AppPlayerBar = function () {
    var _a, _b, _c;
    var _d = react_1.useState(false), isPlaying = _d[0], setIsPlaying = _d[1];
    var _e = react_1.useState(0), progress = _e[0], setProgress = _e[1];
    var _f = react_1.useState(0), duration = _f[0], setDuration = _f[1];
    var _g = react_1.useState(0), currentTime = _g[0], setCurrentTime = _g[1];
    var audioRef = react_1.useRef(null);
    var _h = store_1.useAppSelector(function (state) { return state.player; }, store_1.shallowEqualApp), currentSong = _h.currentSong, lyrics = _h.lyrics, lyricIndex = _h.lyricIndex, playMode = _h.playMode;
    var dispatch = store_1.useAppDispatch();
    /**组件内的副作用和操作 */
    react_1.useEffect(function () {
        //1. 播放音乐
        audioRef.current.src = handle_player_1.getSongPlayUrl(currentSong === null || currentSong === void 0 ? void 0 : currentSong.id);
        // audioRef.current
        //   ?.play()
        //   .then(() => {
        //     console.log('播放成功')
        //   })
        //   .catch((err) => {
        //     setIsPlaying(false)
        //     console.log('播放失败', err)
        //   })
        //2. 获取音乐的总时长
        setDuration(currentSong.dt);
    }, [currentSong]);
    /**音乐播放 */
    function handleTimeUpdate() {
        //1. 获取当前的播放时间
        var currentTime = audioRef.current.currentTime * 1000;
        //2.计算当前的歌曲进度
        var progress = (currentTime / duration) * 100;
        setProgress(progress);
        setCurrentTime(currentTime);
        //3. 根据当前的时间匹配对应的歌词
        var index = lyrics.length - 1;
        for (var i = 0; i < lyrics.length; i++) {
            var lyric = lyrics[i];
            if (lyric.time > currentTime) {
                index = i - 1;
                break;
            }
        }
        //4.匹配上对应的歌词的index
        if (lyricIndex === index || index === -1)
            return;
        dispatch(player_1.changeLyricIndexAction(index));
        var currentLyric = lyrics[index];
        //5. 展示对应的歌词
        antd_1.message.open({
            content: currentLyric === null || currentLyric === void 0 ? void 0 : currentLyric.text,
            key: 'lyric',
            duration: 0
        });
    }
    function handleTimeEnded() {
        var _a;
        if (playMode === 2) {
            //单曲循环
            audioRef.current.currentTime = 0;
            (_a = audioRef.current) === null || _a === void 0 ? void 0 : _a.play();
        }
        else {
            handleChangeMusic(true);
        }
    }
    /**组件内部的事件处理 */
    function handlePlayBtnClick() {
        var _a, _b;
        //1.控制播放器的播放/暂停
        isPlaying
            ? (_a = audioRef.current) === null || _a === void 0 ? void 0 : _a.pause() : (_b = audioRef.current) === null || _b === void 0 ? void 0 : _b.play()["catch"](function () { return setIsPlaying(false); });
        //2. 修改播放状态
        setIsPlaying(!isPlaying);
    }
    function handleChangeMusic(isNext) {
        if (isNext === void 0) { isNext = true; }
        dispatch(player_1.changeMusicAction(isNext));
    }
    function handleChangePlayMode() {
        var newPlayMode = playMode + 1;
        if (newPlayMode > 2)
            newPlayMode = 0;
        dispatch(player_1.changePlayModeAction(newPlayMode));
    }
    function handleSliderChanged(value) {
        var currentTime = (value / 100) * duration;
        audioRef.current.currentTime = currentTime / 1000;
        setCurrentTime(currentTime);
        setProgress(value);
    }
    return (react_1["default"].createElement(style_1.PlayerBarWrapper, { className: "sprite_playbar" },
        react_1["default"].createElement("div", { className: "content wrap-v2" },
            react_1["default"].createElement(style_1.BarControl, { isPlaying: isPlaying },
                react_1["default"].createElement("button", { className: "btn sprite_playbar prev", onClick: function () { return handleChangeMusic(false); } }),
                react_1["default"].createElement("button", { className: "btn sprite_playbar play", onClick: handlePlayBtnClick }),
                react_1["default"].createElement("button", { className: "btn sprite_playbar next", onClick: function () { return handleChangeMusic(); } })),
            react_1["default"].createElement(style_1.BarPlayerInfo, null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/play" },
                    react_1["default"].createElement("img", { className: "image", src: format_1.getImageSize((_a = currentSong === null || currentSong === void 0 ? void 0 : currentSong.al) === null || _a === void 0 ? void 0 : _a.picUrl, 50), alt: "" })),
                react_1["default"].createElement("div", { className: "info" },
                    react_1["default"].createElement("div", { className: "song" },
                        react_1["default"].createElement("span", { className: "song-name" }, currentSong.name),
                        react_1["default"].createElement("span", { className: "singer-name" }, (_c = (_b = currentSong.ar) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.name)),
                    react_1["default"].createElement("div", { className: "progress" },
                        react_1["default"].createElement(antd_1.Slider, { step: 0.5, value: progress, tooltip: { formatter: null }, onChange: handleSliderChanged }),
                        react_1["default"].createElement("div", { className: "time" },
                            react_1["default"].createElement("span", { className: "current" }, format_1.formatTime(currentTime)),
                            react_1["default"].createElement("span", { className: "divider" }, "/"),
                            react_1["default"].createElement("span", { className: "duration" }, format_1.formatTime(duration)))))),
            react_1["default"].createElement(style_1.BarOperator, { playMode: playMode },
                react_1["default"].createElement("div", { className: "left" },
                    react_1["default"].createElement("button", { className: "btn pip" }),
                    react_1["default"].createElement("button", { className: "btn sprite_playbar favor" }),
                    react_1["default"].createElement("button", { className: "btn sprite_playbar share" })),
                react_1["default"].createElement("div", { className: "right sprite_playbar" },
                    react_1["default"].createElement("div", { className: "btn sprite_playbar volume" }),
                    react_1["default"].createElement("div", { className: "btn sprite_playbar loop", onClick: handleChangePlayMode }),
                    react_1["default"].createElement("div", { className: "btn sprite_playbar playlist" })))),
        react_1["default"].createElement("audio", { ref: audioRef, onTimeUpdate: handleTimeUpdate, onEnded: handleTimeEnded })));
};
exports["default"] = react_1.memo(AppPlayerBar);
