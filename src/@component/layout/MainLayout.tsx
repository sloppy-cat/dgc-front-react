import React, { FC } from 'react'
import styled from 'styled-components'

const MainLayout: FC<{title?:string}> = ({title, children}) => {
  return (
    <LayoutDiv>
      <h1>{title}</h1>
      {children}
    </LayoutDiv>
  )
}

export default MainLayout

const LayoutDiv = styled.div`
  padding: 5px;
  text-align: center;
`