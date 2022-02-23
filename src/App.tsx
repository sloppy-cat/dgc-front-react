import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainLayout from './@component/layout/MainLayout'
import UserList from './@component/userList/UserList'
import Search from './@component/search/Search'
import createStore from './@lib/redux/store'
import { Provider } from 'react-redux'

function App() {
  const store = createStore()

  return (
    <Provider store={store}>
      <MainLayout>
        <Search />
        <UserList />
      </MainLayout>
    </Provider>
  )
}

export default App
