import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
  },
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.keyword = action.payload
    },
    getSearch(_, __: PayloadAction<string>) {},
  },
})
export const search = searchSlice.name
export const searchSelector = (state: {[searchSlice.name]: {keyword: string}}) => state[search]
export const { setSearch, getSearch } = searchSlice.actions
export default searchSlice.reducer