import React from 'react';
import styled from 'styled-components';

import Box from './Components/Box';
import Sphere from './Components/Sphere';
import Triangle from './Components/Triangle';
import firebase from '../../firebase.config';

import PropTypes from 'prop-types';

const Main = styled.div`

`
const TempButton = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid grey;
  cursor: pointer;
`

const Login = ({ onLogin }) => {

  const getData = () => {
    console.log(  console.log(firebase.getCurrentUid()));

  }

  const logOut = () => {
    firebase.logout();
  }

  return (
    <Main>
      <TempButton onClick={getData}>Pobierz dane</TempButton>
      <TempButton onClick={logOut}>Wyloguj</TempButton>
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