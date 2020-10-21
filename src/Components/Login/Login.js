import React from 'react';
import styled from 'styled-components';

import Box from './Components/Box';
import Sphere from './Components/Sphere';
import Triangle from './Components/Triangle';

const Main = styled.div`
  /* overflow: hidden; */
`

const Login = () => {
  return (
    <Main>
      <Sphere />
      <Box />
      <Triangle />
    </Main>
  )
}

export default Login;