import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendAction = createAsyncThunk(
    'hotRecommend',
    async (arg, { dispatch }) => { 
        const res = await getHotRecommend(8)
        dispatch(changeHotRecommendsAction(res.result))
    }
)
export const fetchNewAlbumAction = createAsyncThunk(
    'newAlbum',
    async (arg, { dispatch }) => {
        const res = await getNewAlbum()
        dispatch(changeNewAlbumsAction(res.albums))
    }
)


interface IRecommentState {
    banners: any[]
    hotRecommends: any[]
    newAlbums: any[]
}

const initialState: IRecommentState = {
    banners: [],
    hotRecommends: [],
    newAlbums: []
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
        }
    },
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

export const { changeBannersAction, changeHotRecommendsAction, changeNewAlbumsAction } = recommendSlice.actions 
export default recommendSlice.reducer