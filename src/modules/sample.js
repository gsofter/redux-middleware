import { createAction, handleActions } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api'
import createRequestThunk from '../lib/createRequestThunk'
import { startLoading, finishLoading } from './loading'
import createRequestSaga from '../lib/createRequestSaga'

// Action types
const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE'

// thunk functions

export const getPost = createAction(GET_POST, (id) => id)
export const getUsers = createAction(GET_USERS)

const getPostSaga = createRequestSaga(GET_POST, api.getPost)
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers)

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga)
  yield takeLatest(GET_USERS, getUsersSaga)
}

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
}

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, // finish
      },
      users: action.payload,
    }),
  },
  initialState,
)

export default sample
