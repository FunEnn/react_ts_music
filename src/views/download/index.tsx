import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Download: FC<IProps> = () => {
  return (
    <div>
      <div>Download</div>
    </div>
  )
}
export default memo(Download)
