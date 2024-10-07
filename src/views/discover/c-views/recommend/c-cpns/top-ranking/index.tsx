import React, { FC, ReactNode, memo } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

interface IProps {
  children?: ReactNode
}
const TopRanking: FC<IProps> = () => {
  const { rankings = [] } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}
export default memo(TopRanking)
