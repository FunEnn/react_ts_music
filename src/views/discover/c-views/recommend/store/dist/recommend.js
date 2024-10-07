"use strict";
var _a;
exports.__esModule = true;
exports.changeSettleSingersAction = exports.changeRankingsAction = exports.changeNewAlbumsAction = exports.changeHotRecommendsAction = exports.changeBannersAction = exports.fetchRankingDataAction = exports.fetchRecommendDataAction = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var recommend_1 = require("../service/recommend");
exports.fetchRecommendDataAction = toolkit_1.createAsyncThunk('fetchdata', function (_, _a) {
    var dispatch = _a.dispatch;
    //1.获取轮播图数据
    recommend_1.getBanners().then(function (res) {
        dispatch(exports.changeBannersAction(res.banners));
    });
    recommend_1.getHotRecommend(8).then(function (res) {
        dispatch(exports.changeHotRecommendsAction(res.result));
    });
    recommend_1.getNewAlbum().then(function (res) {
        dispatch(exports.changeNewAlbumsAction(res.albums));
    });
    recommend_1.getArtistList(5).then(function (res) {
        dispatch(exports.changeSettleSingersAction(res.artists));
    });
});
var rankingIds = [19723756, 3779629, 2884035];
exports.fetchRankingDataAction = toolkit_1.createAsyncThunk('rankingData', function (_, _a) {
    var dispatch = _a.dispatch;
    //获取榜单数据
    var promises = [];
    for (var _i = 0, rankingIds_1 = rankingIds; _i < rankingIds_1.length; _i++) {
        var id = rankingIds_1[_i];
        promises.push(recommend_1.getPlaylistDetail(id));
    }
    Promise.all(promises).then(function (res) {
        var playlists = res
            .filter(function (item) { return item.playlist; })
            .map(function (item) { return item.playlist; });
        dispatch(exports.changeRankingsAction(playlists));
    });
});
var initialState = {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: [],
    settleSingers: []
};
var recommendSlice = toolkit_1.createSlice({
    name: 'recommend',
    initialState: initialState,
    reducers: {
        changeBannersAction: function (state, action) {
            state.banners = action.payload;
        },
        changeHotRecommendsAction: function (state, action) {
            state.hotRecommends = action.payload;
        },
        changeNewAlbumsAction: function (state, action) {
            state.newAlbums = action.payload;
        },
        changeRankingsAction: function (state, action) {
            state.rankings = action.payload;
        },
        changeSettleSingersAction: function (state, action) {
            state.settleSingers = action.payload;
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(fetchBannerDataAction.pending, () => {
    //     })
    //     .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
    //         state.banners = action.payload
    //     })
    //     .addCase(fetchBannerDataAction.rejected, () => {
    //     })
    // }
});
exports.changeBannersAction = (_a = recommendSlice.actions, _a.changeBannersAction), exports.changeHotRecommendsAction = _a.changeHotRecommendsAction, exports.changeNewAlbumsAction = _a.changeNewAlbumsAction, exports.changeRankingsAction = _a.changeRankingsAction, exports.changeSettleSingersAction = _a.changeSettleSingersAction;
exports["default"] = recommendSlice.reducer;
