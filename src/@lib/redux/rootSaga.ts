import { all, takeLatest } from "redux-saga/effects"
import { handleInputKeyword } from "../../@features/Search/searchSaga"
import { getSearch } from "../../@features/Search/searchSlice"
import { handleChangeKeyword } from '../../@features/UserList/userListSaga'
import { getUserList } from "../../@features/UserList/userListSlice"


// import { handleGetCountryList } from "../../features/countryList/countryListSaga"
// import { handleInputKeyword } from "../../features/listSearch/listSearchSaga"
// import { getListSearch } from "../../features/listSearch/listSearchSlice"

export function* rootSaga() {
  yield all([
    takeLatest(getUserList.type, handleChangeKeyword),
    takeLatest(getSearch.type, handleInputKeyword)
  ])
}