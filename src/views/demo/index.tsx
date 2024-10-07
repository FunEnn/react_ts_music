import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number // 可选属性
}
const Download: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      {props.children}
    </div>
  )
}

// const Download = (props: IProps) => {
//   return (
//     <div>
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//         {props.children}
//     </div>
//   )
// }

export default memo(Download)
