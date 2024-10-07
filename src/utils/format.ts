export function formatCount(count: number) {
  if (count > 1000000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  //1. 将毫秒转成秒钟
  const timeSeconds = time / 1000

  //2. 获取分钟和秒钟
  // 100s => 01:40
  const minue = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  const formatMinue = minue < 10 ? `0${minue}` : minue
  const formatSecond = second < 10 ? `0${second}` : second
  return `${formatMinue}:${formatSecond}`
}