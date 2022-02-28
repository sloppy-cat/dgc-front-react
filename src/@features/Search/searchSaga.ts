import { put, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { setSearch } from './searchSlice'


// debouncing 키워드
export function* handleInputKeyword(action: PayloadAction<string>) {
  yield delay(1500)
  yield put(setSearch(action.payload))
}