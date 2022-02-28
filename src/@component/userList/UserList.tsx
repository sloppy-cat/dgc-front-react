import React, { FC } from 'react'
import { connect, useSelector } from 'react-redux'
import { searchSelector } from '../../@features/Search/SearchSlice'

interface UserListProps {
  
}

const UserList: FC<UserListProps> = () => {

  const { keyword } = useSelector(searchSelector)
  return (
    <div>{keyword}</div>
  )
}

export default UserList
