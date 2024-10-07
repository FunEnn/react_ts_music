import React, { FC, ReactNode, Suspense, memo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(Discover)
