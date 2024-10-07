import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Artist: FC<IProps> = () => {
  return (
    <div>
      <div>Artist</div>
    </div>
  )
}
export default memo(Artist)
