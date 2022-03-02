import React, { FC, useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getNextPageUserList, getUserList, userListSelector } from '../../@features/UserList/userListSlice'
import styled from 'styled-components' 
import { Link } from "react-router-dom";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import UserDetail from './UserDetail';

interface UserListProps {
  
}

const UserList: FC<UserListProps> = () => {
  //state 가져옴
  const { userList, loading, page, keyword, pageLoading } = useSelector(userListSelector)
  const dispatch = useDispatch()
  const checkPage = () => (page-1)*5 < userList.total_count
  const handleScroll = () => {
    //전체 페이지 총높이
    const scrollHeight = document.documentElement.scrollHeight
    //이미 스크롤되어 안보이는 페이지의 높이
    const scrollTop = document.documentElement.scrollTop
    // 내가 보고있는 페이지의 높이
    const clientHeight = document.documentElement.clientHeight
    
    if (scrollHeight <= scrollTop + clientHeight && checkPage()) {
      dispatch(getNextPageUserList({keyword, page}))
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  })
  const [isEnd, setIsEnd] = useState<boolean>(false)
  useEffect(()=>{},[isEnd])
  useEffect(()=>{setIsEnd(false)},[keyword])

  return loading ? (<Loading><circle cx="25" cy="25" r="25" /></Loading>) : (
    <>
      <UserListDiv>
        {userList.items.map((user, index) => (
          <UserDetail user={user} key={index}/>
        ))}
      </UserListDiv>
      {pageLoading ? <Loading><circle cx="25" cy="25" r="25" /></Loading> : <PaddingDiv></PaddingDiv>}
      <br />
    </>
  )
}

export default UserList

const UserListDiv = styled.div`
  text-align: left;
  padding: 10px;
`

const UserDiv = styled.div`
  height: 50px;
  border-top: 1px solid;
  padding: 5px;
  margin: 5px;
`
const UserProfileImg = styled.img`
  height: 50px;
  cursor: pointer;
`
const PaddingDiv = styled.div`
  height: 150px;
`

const Loading = styled.svg`
  
  circle{
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke:#00a1ff;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 180;
    stroke-dashoffset: 180;
    animation: animate 2s linear infinite;
  }
  @keyframes rotate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
  }
  @keyframes animate{
    0%,100%{
        stroke-dashoffset: 180;
    }
    50%{
        stroke-dashoffset: 0;
    }
    50.1%{
        stroke-dashoffset: 360;
    }
  }
  margin: 100px 0 100px;
  top: 30%;
  left: 50%;
  width: 60px;
  height: 60px;
  animation: rotate 2s linear infinite;
}
`