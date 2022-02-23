import { all, takeLatest } from "redux-saga/effects"
import { handleInputKeyword } from "../../@features/Search/searchSaga"
import { getSearch } from "../../@features/Search/SearchSlice"
// import { handleGetCountryList } from "../../features/countryList/countryListSaga"
// import { getCountryList } from "../../features/countryList/countryListSlice"
// import { handleInputKeyword } from "../../features/listSearch/listSearchSaga"
// import { getListSearch } from "../../features/listSearch/listSearchSlice"

export function* rootSaga() {
  yield all([
    // takeLatest(getCountryList.type, handleGetCountryList),
    takeLatest(getSearch.type, handleInputKeyword)
  ])
}