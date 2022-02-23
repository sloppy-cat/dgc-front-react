import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainLayout from './@component/layout/MainLayout'
import UserList from './@component/userList/UserList'
import Search from './@component/search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainLayout>
        <Search />
        <UserList />
      </MainLayout>
    </div>
  )
}

export default App
