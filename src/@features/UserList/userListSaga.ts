import { PayloadAction } from '@reduxjs/toolkit'
import { put, call, delay } from 'redux-saga/effects'
import { failedUserList, fetchUserList, setUserList } from './UserListSlice'

export function* handleGetUserList(action: PayloadAction<string | undefined>) {
  yield delay(1000)
  try {
    const response = call(fetchUserList, action.payload)
    yield put(setUserList(response))
  } catch(error) {
    yield put(failedUserList(error))
  }
}