import hyRequest from '@/service'
import React, { FC, ReactNode, memo, useEffect, useState } from 'react'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>

    </div>
  )
}
export default memo(Recommend)
