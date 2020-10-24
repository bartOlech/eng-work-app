import React from 'react';
import styled from 'styled-components';

import Box from './Components/Box';
import Sphere from './Components/Sphere';
import Triangle from './Components/Triangle';

import PropTypes from 'prop-types';

const Main = styled.div`

`

const Login = ({ onLogin }) => {
  return (
    <Main>
      <Sphere />
      <Box onLogin={onLogin} />
      <Triangle />
    </Main>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Login;