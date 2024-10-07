import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Songs: FC<IProps> = () => {
  return (
    <div>
      <div>Songs</div>
    </div>
  )
}
export default memo(Songs)
