import React, { FC, ReactNode, memo, useEffect, useRef, useState } from 'react'
import {
  BarPlayerInfo,
  PlayerBarWrapper,
  BarControl,
  BarOperator
} from './style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from '../store/player'
interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => state.player,
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  /**组件内的副作用和操作 */
  useEffect(() => {
    //1. 播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong?.id)
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
    setDuration(currentSong.dt)
  }, [currentSong])

  /**音乐播放 */
  function handleTimeUpdate() {
    //1. 获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000

    //2.计算当前的歌曲进度
    const progress = (currentTime / duration) * 100
    setProgress(progress)
    setCurrentTime(currentTime)

    //3. 根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    //4.匹配上对应的歌词的index
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    const currentLyric = lyrics[index]
    //5. 展示对应的歌词
    message.open({
      content: currentLyric?.text,
      key: 'lyric',
      duration: 0
    })
  }

  function handleTimeEnded() {
    if (playMode === 2) {
      //单曲循环
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  /**组件内部的事件处理 */
  function handlePlayBtnClick() {
    //1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    //2. 修改播放状态
    setIsPlaying(!isPlaying)
  }

  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  function handleSliderChanged(value: number) {
    const currentTime = (value / 100) * duration

    audioRef.current!.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/play">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              {/**Slider组件 */}
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <div className="btn sprite_playbar volume"></div>
            <div
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></div>
            <div className="btn sprite_playbar playlist"></div>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
    </PlayerBarWrapper>
  )
}
export default memo(AppPlayerBar)
