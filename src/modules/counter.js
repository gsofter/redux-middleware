import { createAction, handleActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase())
  }, 1000)
}
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease())
  }, 1000)
}

const initState = 0

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initState,
)
export default counter
