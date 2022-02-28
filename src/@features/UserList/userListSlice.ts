import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { User } from '../../@lib/type';

interface UserList {
  total_count: number
  incomplete_results: boolean
  items: User[]
}

interface UserListState {
  userList: UserList
  loading: boolean
  error: ""
}

const initialState: UserListState = {
  userList: {
    total_count: 0,
    incomplete_results: false,
    items: []
  },
  loading: false,
  error: ""
}

export const fetchUserList = async (param?: string): Promise<UserList> => {
  return axios.request<UserList>({
    url: "https://api.github.com/search/users",
    params: {
      q: param ? `${param} in:login` : ""
    },
    method: 'GET'
  }).then((res)=>res.data).catch((error)=>error)
}

const UserListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getUserList(_, __: PayloadAction<string>) {},
    setUserList(state, action: PayloadAction<UserList>) {},
    failedUserList(state, action) {
      state.loading = false
      state.error = action.payload
    },
  }
});

export const {getUserList, setUserList, failedUserList} = UserListSlice.actions
export const userList = UserListSlice.name
export default UserListSlice.reducer