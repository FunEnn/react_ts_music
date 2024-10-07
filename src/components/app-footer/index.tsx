import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const AppFooter: FC<IProps> = () => {
  return (
    <div>
      <div>AppFooter</div>
    </div>
  )
}
export default memo(AppFooter)
