import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Mine: FC<IProps> = () => {
  return (
    <div>
      <div>Mine</div>
    </div>
  )
}
export default memo(Mine)
