import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    //1.获取轮播图数据
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendsAction(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    //获取榜单数据
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface IRecommentState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]

  rankings: any[]
  // upRanking: any
  // newRanking: any
  // originRanking: any

  settleSingers: any[]
}

const initialState: IRecommentState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, action) {
      state.banners = action.payload
    },
    changeHotRecommendsAction(state, action) {
      state.hotRecommends = action.payload
    },
    changeNewAlbumsAction(state, action) {
      state.newAlbums = action.payload
    },
    changeRankingsAction(state, action) {
      state.rankings = action.payload
    },
    changeSettleSingersAction(state, action) {
      state.settleSingers = action.payload
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
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
