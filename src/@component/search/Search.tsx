import { TextField } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getUserList } from '../../@features/UserList/userListSlice'
// import { fetchUserList } from '../../@features/UserList/UserListSlice'

const Search: FC = () => {

  const dispatch = useDispatch()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(getUserList(event.currentTarget.value))
    console.log(`검색 키워드 변경 : "${event.currentTarget.value}"`)
  }

  return (
    <>
      <TextField 
        onChange={handleChange} 
        placeholder="유저 계정을 입력하세요" 
        variant="outlined" 
        sx={{
          width: "90%"
        }}
      />
    </>
  )
}

export default Search

const SearchInput = styled.input`
  border: 0;
  margin-left: 5px;
  width: 95%;
  :focus {
    outline: none;
    font-size: 15px;
  }
`