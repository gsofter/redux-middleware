// function loggerMiddleware(store) {
//   console.log(store)
//   return function (next) {
//     console.log(next)
//     return function (action) {
//       console.log('action', action)
//     }
//   }
// }

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type) // action type 으로 Log 를 그룹화함
  console.log('Prev State', store.getState())
  console.log('Action', action)
  next(action) // 다음 middleware 혹은 reducer 에게 전달
  console.log('Next State', store.getState()) // Update 된 상태
  console.groupEnd()
}

export default loggerMiddleware
