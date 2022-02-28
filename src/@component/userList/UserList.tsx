import React, { FC, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUserList, userListSelector } from '../../@features/UserList/userListSlice'

interface UserListProps {
  
}

const UserList: FC<UserListProps> = () => {
  const dispatch = useDispatch()
  const { userList, loading } = useSelector(userListSelector)


  return loading ? (<div>LOADING</div>) : (
    <div>
      a
      {userList.items.map((user) => (
        <div>{user.login}</div>
      ))}
    </div>
  )
}

export default UserList
