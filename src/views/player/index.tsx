import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Player: FC<IProps> = () => {
  return (
    <div>
      <div>Player</div>
    </div>
  )
}
export default memo(Player)
