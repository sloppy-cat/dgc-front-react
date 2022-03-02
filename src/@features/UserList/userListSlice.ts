import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { User } from '../../@lib/type';

export interface UserList {
  total_count: number
  incomplete_results: boolean
  items: User[]
}

interface UserListState {
  userList: UserList
  loading: boolean
  pageLoading: boolean
  keyword: string
  error: ""
  page: number
}

const initialState: UserListState = {
  userList: {
    total_count: 0,
    incomplete_results: false,
    items: []
  },
  loading: false,
  pageLoading: false,
  keyword: "",
  error: "",
  page: 1,
}

const UserListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getUserList(state, _: PayloadAction<string>) {
      if (!state.loading) state.loading = true
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    setUserList(state, action: PayloadAction<UserList>) {
      console.log(action.payload)
      state.userList = action.payload
      state.page = 2
    },
    setUserDetail(state, action: PayloadAction<User[]>) {
      console.log(action.payload)
      state.userList.items = action.payload
      state.loading = false
    },
    failedUserList(state, action) {
      state.loading = false
      state.error = action.payload
    },
    getNextPageUserList(state, _: PayloadAction<{keyword: string, page: number}>) {
      state.pageLoading = true
      state.page += 1
    },
    setNextPageUserList(state, action: PayloadAction<User[]>) {
      console.log(action.payload)
      state.userList.items = state.userList.items.concat(action.payload)
      state.pageLoading = false
    }
  }
});

export const {getUserList, setUserList, failedUserList, setKeyword, getNextPageUserList, setNextPageUserList, setUserDetail} = UserListSlice.actions
export const userList = UserListSlice.name
export const userListSelector = (state: {[UserListSlice.name]: UserListState}) => state[userList]
export default UserListSlice.reducer