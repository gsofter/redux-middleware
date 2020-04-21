import { startLoading, finishLoading } from '../modules/loading'

export default function createRequestThunk(type, request) {
  // SUCESS OR FAILURE TYPES
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return (params) => async (dispatch) => {
    dispatch({ type }) // start
    dispatch(startLoading(type))
    try {
      const response = await request(params)
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }) // success
      dispatch(finishLoading(type))
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }) // Error

      dispatch(startLoading(type))
      throw e
    }
  }
}
