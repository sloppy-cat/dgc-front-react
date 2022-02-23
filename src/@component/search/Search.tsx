import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { getSearch } from '../../@features/Search/SearchSlice'
// import { fetchUserList } from '../../@features/UserList/UserListSlice'

const Search: FC = () => {

  const dispatch = useDispatch()
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(getSearch(event.currentTarget.value))
    console.log(`검색 키워드 변경 : "${event.currentTarget.value}"`)
  }

  return (
    <div>
      {/* <button onClick={()=>{fetchUserList("sloppy-cat").then((value)=>{alert(value?.items[0]?.login)})}}>테스트 버튼</button> */}
      <br />
      <input type="text" onChange={handleChange} placeholder="검색어를 입력하세요" />
    </div>
  )
}

export default Search