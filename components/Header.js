import React from 'react'
import styled from 'styled-components/native'

const HeaderText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  font-family: futura;
`

const Header = () => {
  
  return (
    <HeaderText>ASK A QUESTION AND SHAKE THE MAGIC 8-BALL</HeaderText>
    /*<HeaderText>Ask a question and shake the magic eight ball</HeaderText>*/
  )
}

export default Header