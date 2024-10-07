import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return (
    <div>
      <div>Ranking</div>
    </div>
  )
}
export default memo(Ranking)
