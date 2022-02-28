import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './rootSaga'
import userListReducer, { userList } from '../../@features/UserList/userListSlice'
import searchReducer, { search } from '../../@features/Search/searchSlice'


const sagaMiddleware = createSagaMiddleware()

function createStore() {

  const store = configureStore({
    reducer: combineReducers({
      [userList]: userListReducer,
      [search]: searchReducer
    }),
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga)

  return store
}

export default createStore