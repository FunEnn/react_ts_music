import React, { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}
const Djradio: FC<IProps> = () => {
  return (
    <div>
      <div>Djradio</div>
    </div>
  )
}
export default memo(Djradio)
