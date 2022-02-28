import { PayloadAction } from '@reduxjs/toolkit'
import { put, call, delay } from 'redux-saga/effects'
import { failedUserList, fetchUserList, setUserList } from './userListSlice'

export function* handleChangeKeyword(action: PayloadAction<string>) {
  yield delay(1000)
  try {
    const response = yield call(fetchUserList, action.payload)
    console.log(response)
    yield put(setUserList(response))
  } catch(error) {
    yield put(failedUserList(error))
  }
}