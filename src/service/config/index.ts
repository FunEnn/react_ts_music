// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

//2.依赖当前环境：process.env.NODE_ENV              
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://codercba.com:9002'
// }

// export { BASE_URL }

//3. 从定义的环境变量的配置文件中，加载变量
export const BASE_URL = process.env.REACT_APP_BASE_URL