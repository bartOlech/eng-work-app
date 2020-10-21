import React from 'react';
import styled from 'styled-components';

import LeftContent from './Components/LeftContent';
import RightContent from './Components/RightContent';

const Main = styled.div`
  width: 1200px;
  height: 580px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 46px;
  box-shadow: 0px 0px 5px -1px rgba(143,143,143,1);
`

const Box = () => {
  return (
    <Main>
      <LeftContent />
      <RightContent />
    </Main>
  )
}

export default Box;