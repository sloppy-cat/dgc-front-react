import { all, takeLatest } from "redux-saga/effects"
import { handleChangeKeyword, handleScrollEnd } from '../../@features/UserList/userListSaga'
import { getNextPageUserList, getUserList } from "../../@features/UserList/userListSlice"

export function* rootSaga() {
  yield all([
    takeLatest(getUserList.type, handleChangeKeyword),
    takeLatest(getNextPageUserList.type, handleScrollEnd)
  ])
}