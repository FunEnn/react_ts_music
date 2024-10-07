"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.changePlayModeAction = exports.changePlaySongListAction = exports.changePlaySongIndexAction = exports.changeLyricIndexAction = exports.changeLyricsAction = exports.changeCurrentSongAction = exports.changeMusicAction = exports.fetchCurrentSongAction = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var player_1 = require("../service/player");
var parse_lyric_1 = require("@/utils/parse-lyric");
exports.fetchCurrentSongAction = toolkit_1.createAsyncThunk('currentSong', function (id, _a) {
    var dispatch = _a.dispatch, getState = _a.getState;
    // 1.从列表尝试是否可以获取到这首歌
    var playSongList = getState().player.playSongList;
    var findIndex = playSongList.findIndex(function (item) { return item.id === id; });
    if (findIndex === -1) {
        // 没有找到相同的
        // 1.获取歌曲信息
        player_1.getSongDetail(id).then(function (res) {
            // 1.获取歌曲信息
            if (!res.songs.length)
                return;
            var song = res.songs[0];
            // 2.将歌曲信息添加到播放列表中
            var newPlaySongList = __spreadArrays(playSongList, [song]);
            newPlaySongList.push(song);
            dispatch(exports.changeCurrentSongAction(song));
            dispatch(exports.changePlaySongListAction(newPlaySongList));
            dispatch(exports.changePlaySongIndexAction(newPlaySongList.length - 1));
        });
    }
    else {
        // 找到了相同的
        var song = playSongList[findIndex];
        dispatch(exports.changeCurrentSongAction(song));
        dispatch(exports.changePlaySongIndexAction(findIndex));
    }
    // 2.获取歌词数据
    player_1.getSongLyric(id).then(function (res) {
        // 1.获取歌词的字符串
        var lyricString = res.lrc.lyric;
        //2. 调用解析歌词的函数
        var lyric = parse_lyric_1.parseLyric(lyricString);
        dispatch(exports.changeLyricsAction(lyric));
    });
});
exports.changeMusicAction = toolkit_1.createAsyncThunk('changemusic', function (isNext, _a) {
    var dispatch = _a.dispatch, getState = _a.getState;
    // 1. 获取state中的数据
    var play = getState().player;
    var playMode = play.playMode;
    var songIndex = play.playSongIndex;
    var songList = play.playSongList;
    // 2. 根据不同的模式计算不同的下一首歌曲的索引
    var newIndex = songIndex;
    if (playMode === 1) {
        newIndex = Math.floor(Math.random() * songList.length);
    }
    else {
        newIndex = isNext ? songIndex + 1 : songIndex - 1;
        if (newIndex > songList.length - 1)
            newIndex = 0;
        if (newIndex < 0)
            newIndex = songList.length - 1;
    }
    // 3. 获取当前的歌曲
    var song = songList[newIndex];
    dispatch(exports.changeCurrentSongAction(song));
    dispatch(exports.changePlaySongIndexAction(newIndex));
    //4. 请求新的歌词
    player_1.getSongLyric(song.id).then(function (res) {
        // 1.获取歌词的字符串
        var lyricString = res.lrc.lyric;
        //2. 调用解析歌词的函数
        var lyric = parse_lyric_1.parseLyric(lyricString);
        dispatch(exports.changeLyricsAction(lyric));
    });
});
var initialState = {
    currentSong: {
        name: '纯音乐演奏',
        id: 356538,
        pst: 0,
        t: 0,
        ar: [
            {
                id: 11704,
                name: '高旗&超载乐队',
                tns: [],
                alias: []
            }
        ],
        alia: [],
        pop: 25,
        st: 0,
        rt: '',
        fee: 0,
        v: 8,
        crbt: null,
        cf: '',
        al: {
            id: 35195,
            name: '超载 同名专辑',
            picUrl: 'https://p2.music.126.net/ErJyVo4fjEST_yRM1pMZSQ==/109951164371936640.jpg',
            tns: [],
            pic_str: '109951164371936640',
            pic: 109951164371936640
        },
        dt: 116000,
        h: {
            br: 320000,
            fid: 0,
            size: 4681240,
            vd: -2,
            sr: 44100
        },
        m: {
            br: 192000,
            fid: 0,
            size: 2808782,
            vd: -2,
            sr: 44100
        },
        l: {
            br: 128000,
            fid: 0,
            size: 1872554,
            vd: 0,
            sr: 44100
        },
        sq: null,
        hr: null,
        a: null,
        cd: '1',
        no: 11,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 2,
        s_id: 0,
        mark: 131072,
        originCoverType: 0,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 8,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        single: 0,
        noCopyrightRcmd: null,
        mv: 0,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 0,
        publishTime: 838828800000
    },
    lyrics: [],
    lyricIndex: -1,
    playSongList: [
        {
            name: 'Folie De César',
            id: 1842025,
            pst: 0,
            t: 0,
            ar: [
                {
                    id: 41271,
                    name: 'Philippe Sarde',
                    tns: [],
                    alias: []
                }
            ],
            alia: [],
            pop: 5,
            st: 0,
            rt: '',
            fee: 0,
            v: 8,
            crbt: null,
            cf: '',
            al: {
                id: 185958,
                name: 'Cesar Et Rosalie',
                picUrl: 'https://p2.music.126.net/T7wrKLHQaq3oCSfRqc51yw==/864216139484919.jpg',
                tns: [],
                pic: 864216139484919
            },
            dt: 65066,
            h: {
                br: 320006,
                fid: 0,
                size: 2604974,
                vd: 53660,
                sr: 44100
            },
            m: {
                br: 192006,
                fid: 0,
                size: 1563002,
                vd: 56302,
                sr: 44100
            },
            l: {
                br: 128006,
                fid: 0,
                size: 1042016,
                vd: 57966,
                sr: 44100
            },
            sq: {
                br: 613572,
                fid: 0,
                size: 4990391,
                vd: 53549,
                sr: 44100
            },
            hr: null,
            a: null,
            cd: '1',
            no: 4,
            rtUrl: null,
            ftype: 0,
            rtUrls: [],
            djId: 0,
            copyright: 2,
            s_id: 0,
            mark: 262144,
            originCoverType: 0,
            originSongSimpleData: null,
            tagPicList: null,
            resourceState: true,
            version: 8,
            songJumpInfo: null,
            entertainmentTags: null,
            awardTags: null,
            single: 0,
            noCopyrightRcmd: null,
            mv: 0,
            rtype: 0,
            rurl: null,
            mst: 9,
            cp: 0,
            publishTime: 754588800007
        },
        {
            name: '陕北曼波说书',
            id: 2623269536,
            pst: 0,
            t: 0,
            ar: [
                {
                    id: 94541116,
                    name: '赛马娘~',
                    tns: [],
                    alias: []
                }
            ],
            alia: [],
            pop: 90,
            st: 0,
            rt: '',
            fee: 8,
            v: 3,
            crbt: null,
            cf: '',
            al: {
                id: 246694345,
                name: '陕北曼波说书',
                picUrl: 'https://p2.music.126.net/5QGUU6UPg56Wn9_ClZZrRA==/109951169925645193.jpg',
                tns: [],
                pic_str: '109951169925645193',
                pic: 109951169925645200
            },
            dt: 122197,
            h: {
                br: 320000,
                fid: 0,
                size: 4890166,
                vd: 11815,
                sr: 44100
            },
            m: {
                br: 192000,
                fid: 0,
                size: 2934117,
                vd: 14411,
                sr: 44100
            },
            l: {
                br: 128000,
                fid: 0,
                size: 1956093,
                vd: 16084,
                sr: 44100
            },
            sq: {
                br: 880087,
                fid: 0,
                size: 13443020,
                vd: 10712,
                sr: 44100
            },
            hr: null,
            a: null,
            cd: '01',
            no: 1,
            rtUrl: null,
            ftype: 0,
            rtUrls: [],
            djId: 0,
            copyright: 1,
            s_id: 0,
            mark: 270464,
            originCoverType: 0,
            originSongSimpleData: null,
            tagPicList: null,
            resourceState: true,
            version: 3,
            songJumpInfo: null,
            entertainmentTags: null,
            awardTags: null,
            single: 0,
            noCopyrightRcmd: null,
            mv: 0,
            mst: 9,
            cp: 743010,
            rtype: 0,
            rurl: null,
            publishTime: 1725206400000
        },
        {
            name: '哈雪大帽险纯享',
            id: 2620887066,
            pst: 0,
            t: 0,
            ar: [
                {
                    id: 59574870,
                    name: 'bubba',
                    tns: [],
                    alias: []
                }
            ],
            alia: [],
            pop: 90,
            st: 0,
            rt: '',
            fee: 0,
            v: 4,
            crbt: null,
            cf: '',
            al: {
                id: 245990057,
                name: '哈雪大帽险纯享哈雪大帽险纯享',
                picUrl: 'https://p1.music.126.net/HaV5JHBqI_xhNI_zT4Hfdg==/109951169586635137.jpg',
                tns: [],
                pic_str: '109951169586635137',
                pic: 109951169586635140
            },
            dt: 195326,
            h: {
                br: 320000,
                fid: 0,
                size: 7815880,
                vd: -46326,
                sr: 44100
            },
            m: {
                br: 192000,
                fid: 0,
                size: 4689546,
                vd: -43739,
                sr: 44100
            },
            l: {
                br: 128000,
                fid: 0,
                size: 3126378,
                vd: -42102,
                sr: 44100
            },
            sq: {
                br: 866499,
                fid: 0,
                size: 21156261,
                vd: -46394,
                sr: 44100
            },
            hr: null,
            a: null,
            cd: '01',
            no: 1,
            rtUrl: null,
            ftype: 0,
            rtUrls: [],
            djId: 0,
            copyright: 0,
            s_id: 0,
            mark: 131200,
            originCoverType: 2,
            originSongSimpleData: null,
            tagPicList: null,
            resourceState: true,
            version: 4,
            songJumpInfo: null,
            entertainmentTags: null,
            awardTags: null,
            single: 0,
            noCopyrightRcmd: null,
            mv: 0,
            rtype: 0,
            rurl: null,
            mst: 9,
            cp: 0,
            publishTime: 0
        }
    ],
    playSongIndex: -1,
    playMode: 0 // 0代表顺序播放 1代表随机播放 2代表单曲循环
};
var playerSlice = toolkit_1.createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        changeCurrentSongAction: function (state, _a) {
            var payload = _a.payload;
            state.currentSong = payload;
        },
        changeLyricsAction: function (state, _a) {
            var payload = _a.payload;
            state.lyrics = payload;
        },
        changeLyricIndexAction: function (state, _a) {
            var payload = _a.payload;
            state.lyricIndex = payload;
        },
        changePlaySongIndexAction: function (state, _a) {
            var payload = _a.payload;
            state.playSongIndex = payload;
        },
        changePlaySongListAction: function (state, _a) {
            var payload = _a.payload;
            state.playSongList = payload;
        },
        changePlayModeAction: function (state, _a) {
            var payload = _a.payload;
            state.playMode = payload;
        }
    }
});
exports.changeCurrentSongAction = (_a = playerSlice.actions, _a.changeCurrentSongAction), exports.changeLyricsAction = _a.changeLyricsAction, exports.changeLyricIndexAction = _a.changeLyricIndexAction, exports.changePlaySongIndexAction = _a.changePlaySongIndexAction, exports.changePlaySongListAction = _a.changePlaySongListAction, exports.changePlayModeAction = _a.changePlayModeAction;
exports["default"] = playerSlice.reducer;
