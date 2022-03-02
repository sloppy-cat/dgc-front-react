import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { put, call, delay } from 'redux-saga/effects'
import { User } from '../../@lib/type'
import { failedUserList, setKeyword, setNextPageUserList, setUserDetail, setUserList, UserList } from './userListSlice'

const fetchUserList = async (keyword: string, page?: number): Promise<UserList> => {
  const params = {
    q: keyword ? `${keyword} in:login` : " in:login",
    per_page: 5,
    
  }
  // const TOKEN = process.env.PERSONAL_TOKEN
  // console.log(TOKEN)
  return axios.request<UserList>({
    url: "https://api.github.com/search/users",
    headers: {
      // Authorization: `token ${TOKEN}`
      Authorization: `token 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`
    },
    params: {...params, page},
    method: 'GET'
  }).then((res) => res.data).catch((error)=>error)
}

const fetchUser = async (username: string): Promise<User> => {
  return axios.request<UserList>({
    url: `https://api.github.com/users/${username}`,
    headers: {
      // Authorization: `token ${TOKEN}`
      Authorization: `token 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`
    },
    method: 'GET'
  }).then((res)=>res.data).catch((error)=>error)
}

const fetchMultiUser = async (userList: UserList): Promise<User[]> => {
  return axios.all<User>(
    userList.items.map((value)=>fetchUser(value.login))
  ).then(
    axios.spread((...userDetailList)=>userDetailList)
  ).catch((error)=>error)
}

export function* handleChangeKeyword(action: PayloadAction<string>) {
  yield delay(1000)
  try {
    yield put(setKeyword(action.payload))
    const userList: UserList = yield call(fetchUserList, action.payload)
    yield put(setUserList(userList))
    const userDetailList: User[] = yield call(fetchMultiUser, userList)
    console.log(userDetailList)
    yield put(setUserDetail(userDetailList))
  } catch(error) {
    yield put(failedUserList(error))
  }
}

export function* handleScrollEnd(action: PayloadAction<{keyword: string, page: number}>) {
  yield delay(100)
  try {
    const userList: UserList = yield call(fetchUserList, action.payload.keyword, action.payload.page)
    const userDetailList: User[] = yield call(fetchMultiUser, userList)
    console.log(userDetailList)
    yield put(setNextPageUserList(userDetailList))
  } catch(error) {
    yield put(failedUserList(error))
  }
}