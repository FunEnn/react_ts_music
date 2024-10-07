import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
    })

    // 2.获取歌词数据
    getSongLyric(id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric

      //2. 调用解析歌词的函数
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricsAction(lyric))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
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
      picUrl:
        'https://p2.music.126.net/ErJyVo4fjEST_yRM1pMZSQ==/109951164371936640.jpg',
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
        picUrl:
          'https://p2.music.126.net/T7wrKLHQaq3oCSfRqc51yw==/864216139484919.jpg',
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
        picUrl:
          'https://p2.music.126.net/5QGUU6UPg56Wn9_ClZZrRA==/109951169925645193.jpg',
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
      songs: [
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
            picUrl:
              'https://p1.music.126.net/HaV5JHBqI_xhNI_zT4Hfdg==/109951169586635137.jpg',
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
      ]
    },
  ],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
